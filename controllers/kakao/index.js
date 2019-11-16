exports.message = async (req, res, next) => {
  try {
    res.json({ success: true });
  } catch (err) {
    next(err);
  }
};
