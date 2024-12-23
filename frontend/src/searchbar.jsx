import { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const data = ['search']

  // Filter data based on the search term
  const filteredData = data.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: '10px',
          width: '100%',
          maxWidth: '400px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          marginBottom: '20px',
        }}
      />
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {filteredData.map((item, index) => (
          <li key={index} style={{ padding: '5px', borderBottom: '1px solid #eee' }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
