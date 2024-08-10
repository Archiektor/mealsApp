import React, {createContext, useState} from 'react';

type FavoritesContextType = {
    ids: string[];
    addFavorite: (id: string) => void;
    removeFavorite: (id: string) => void;
};

export const FavoritesContext = createContext<FavoritesContextType>({
    ids: [],
    addFavorite: () => {},
    removeFavorite: () => {},
});

const FavoritesContextProvider = ({children}: { children: React.ReactNode }) => {
    const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

    const addFavorite = (id: string) => {
        setFavoriteIds((currentFavIds) => [...currentFavIds, id]);
    };

    const removeFavorite = (id: string) => {
        setFavoriteIds((currentFavIds) => currentFavIds.filter(favId => favId !== id));
    };

    const value = {
        ids: favoriteIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite,
    };

    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    );
};

export default FavoritesContextProvider;
