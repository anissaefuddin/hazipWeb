import React, { useState } from 'react';
import { Pha_Recommendations } from '../model/classModel';
import { useDataGlobal } from '../model/DataGlobalContext';
// import { Recommendations } from '../model/classModel';

function RecommendationDropdown(props) {
  const { dataGlobal, updateDataGlobal } = useDataGlobal();
  const [suggestions, setSuggestions] = useState([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedRecommendation, setSelectedRecommendation] = useState({
    ID: '', // Simpan ID Recommendation di sini
    Description: '', // Simpan deskripsi Recommendation di sini
  });
  // eslint-disable-next-line react/prop-types
  const { recommendations, handleRecommendationChange,handleActiveRowRecommendation,dataValue } = props;
  const [inputValue, setInputValue] = useState(dataValue);
  const handleInputChange = (e) => {
    const inputText = e.target.value;
    setInputValue(inputText);
    // Filter Recommendations that match the input text
    // eslint-disable-next-line react/prop-types
    const filteredSuggestions = recommendations.filter((dataRecommendation) =>
      dataRecommendation.Recommendation.toLowerCase().includes(inputText.toLowerCase())
    );
    setSuggestions(filteredSuggestions);

  };

  const handleSuggestionClick = (Recommendation) => {
    setSelectedRecommendation({
      ID: Recommendation.ID, // Simpan ID Recommendation saat item dipilih
      Description: Recommendation.Recommendation, // Simpan deskripsi Recommendation
    });
    setInputValue(Recommendation.Recommendation);
    handleRecommendationChange(Recommendation.Recommendation);
    setSuggestions([]); // Clear suggestions
  };

  const handleInputBlur = () => {
    if (inputValue && !suggestions.some((Recommendation) => Recommendation.Recommendation === inputValue)) {
      const newData = new Pha_Recommendations();
      newData.Pha_Recommendation = inputValue;
      const updatedRecommendation = [...recommendations,newData];
      const data = dataGlobal;
      handleRecommendationChange(newData.Pha_Recommendation);
      data.Pha_Recommendations = updatedRecommendation;
      updateDataGlobal(data);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        onFocus={handleActiveRowRecommendation}
        className='p-1 border-0'
      />
      <ul>
        {suggestions.map((recommendation) => (
          <li key={recommendation.ID} 
            onClick={() => handleSuggestionClick(recommendation)}>
            {recommendation.Recommendation}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecommendationDropdown;