exports.refreshToken = async (req, res) => {
  const oldToken = req.cookies.refreshToken;

  if (!oldToken)
    return res.status(401).json({ message: "No refresh token" });

  try {
    const decoded = jwt.verify(oldToken, process.env.REFRESH_SECRET);

    const user = await User.findById(decoded.id);

    if (!user || user.refreshToken !== oldToken)
      return res.status(403).json({ message: "Invalid refresh token" });

    // 🔥 Generate new tokens (rotation)
    const newAccessToken = generateAccessToken(user);
    const newRefreshToken = generateRefreshToken(user);

    // Save new refresh token in DB
    user.refreshToken = newRefreshToken;
    await user.save();

    // Replace cookie
    res.cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    res.json({ accessToken: newAccessToken });

  } catch {
    res.status(403).json({ message: "Invalid refresh token" });
  }
};