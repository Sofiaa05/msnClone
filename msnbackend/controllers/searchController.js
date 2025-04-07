import Search from '../models/Search.js';

export const searchKeyword = async (req, res) => {
  try {
    const query = req.query.q?.toLowerCase().trim();

    const result = await Search.findOne({ keyword: query });

    if (result) {
      res.json({ url: result.url });
    } else {
      res.status(404).json({ error: 'No match found' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Server error' });
  }
};
