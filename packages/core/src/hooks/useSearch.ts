import { useCallback, useState } from 'react';
import { Internal } from '../utils/helpers';

export default function useSearch(data: any, objPropToUseForDisplayingData?: any) {
  const [filteredCollectionAfterSearch, setFilteredCollectionAfterSearch] = useState(Internal.normalizeSearchData(data, objPropToUseForDisplayingData));

  const handleInputChange = useCallback((text: string | number) => {
    const dataToBeDisplayedAfterUserInput = filteredCollectionAfterSearch.map((dataItem: string) => dataItem.includes(text.toString()));
    setFilteredCollectionAfterSearch(dataToBeDisplayedAfterUserInput)
  }, [filteredCollectionAfterSearch]);

  return { filteredCollectionAfterSearch, handleInputChange }
}