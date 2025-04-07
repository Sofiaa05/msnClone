import mongoose from 'mongoose';

const searchSchema = new mongoose.Schema({
  keyword: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  url: {
    type: String,
    required: true
  }
});

const Search = mongoose.model('Search', searchSchema);

export default Search;
