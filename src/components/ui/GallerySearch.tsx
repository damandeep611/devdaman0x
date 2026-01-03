"use client"

import React, { useState } from 'react'
import CardStack from './PhotoGallery';
import SearchBar from './SearchBar';

export default function GallerySearch() {
    const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <div>
       <CardStack isSearchFocused={isSearchFocused} />
        <div className="-mt-16 z-50">
          <SearchBar onFocusChange={setIsSearchFocused} />
        </div>
    </div>
  )
}
