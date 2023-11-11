import React, { useState,useRef  } from 'react';
import { Safeguards } from '../model/classModel';
import { useDataGlobal } from '../model/DataGlobalContext';

function SafeguardDropdown(props) {
  const { dataGlobal, updateDataGlobal } = useDataGlobal();
  const inputRef = useRef(null);
  const [suggestions, setSuggestions] = useState([]);
  // eslint-disable-next-line react/prop-types
  const { dataSafeguards, handleSafeguardChange,handleActiveRowSafeguard,dataValue } = props;
  const [inputValue, setInputValue] = useState(dataValue);
  const handleInputChange = (e) => {
    const inputText = e.target.value;
    setInputValue(inputText);
    // eslint-disable-next-line react/prop-types
    const filteredSuggestions = dataSafeguards.filter((dataSafeguard) =>
      dataSafeguard.Safeguard.toLowerCase().includes(inputText.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };
  const handleSuggestionClick = (dataSafeguards) => {
    inputRef.current.focus();
    // eslint-disable-next-line react/prop-types
    setInputValue(dataSafeguards.Safeguard);
    // eslint-disable-next-line react/prop-types
    // const isSafeguardExists = dataSafeguards.some((dataafeguard) => dataafeguard.Safeguard === inputValue);

    // if (!isSafeguardExists) {
    //   // Jika safeguard belum ada, tambahkan ke dalam array safeguards
    //   // eslint-disable-next-line react/prop-types
    //   handleSafeguardChange(dataSafeguards.Safeguard);
    //   const newData = new Safeguards();
    //   // eslint-disable-next-line react/prop-types
    //   newData.Safeguard = dataSafeguards.Safeguard;
    //   const updatedSafeguard = [...dataSafeguards, newData];
    //   const data = dataGlobal;
    //   data.Safeguards = updatedSafeguard;
    //   updateDataGlobal(data);
    // }
    // eslint-disable-next-line react/prop-types
    handleSafeguardChange(dataSafeguards.Safeguard);
    setSuggestions([]); // Clear suggestions
  };

  const handleInputBlur = () => {
    console.log('Input onBlur');
    console.log(suggestions.some((safeguard) => safeguard.Safeguard === inputValue));
    console.log(inputValue);
    if (inputValue && !suggestions.some((safeguard) => safeguard.Safeguard === inputValue)) {
      const newData = new Safeguards();
      newData.Safeguard = inputValue;
      const updatedSafeguard = [...dataSafeguards,newData];
      const data = dataGlobal;
      handleSafeguardChange(newData.Safeguard);
      data.Safeguards = updatedSafeguard;
      updateDataGlobal(data);
    }
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        onFocus={handleActiveRowSafeguard}
        className='p-1 border-0'
      />
      <ul>
        {suggestions.map((safeguard) => (
          <li key={safeguard.ID} 
            onClick={() => handleSuggestionClick(safeguard)}>
            {safeguard.Safeguard}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SafeguardDropdown;