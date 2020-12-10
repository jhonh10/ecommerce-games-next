import { useState, useEffect } from 'react';
import { Loader } from 'semantic-ui-react'
import { size } from 'lodash';
import { useRouter } from 'next/router'
import BasicLayout from '../layouts/BasicLayout';
import { searchGameApi } from '../api/game';
import ListGames from '../components/ListGames';
import Seo from '../components/Seo';



export default function Search() {
    const [games, setGames] = useState(null);
    const { query } = useRouter();

    useEffect(() => {
        document.getElementById("search-game").focus();
    }, []);

    useEffect(() => {
        (async () => {
            if (size(query.query) > 0) {
                const response = await searchGameApi(query.query)
                if (size(response) > 0) {
                    setGames(response);
                } else {
                    setGames([]);
                }
            } else {
                setGames([]);
            }
        })()
    }, [query]);

    return (
        <BasicLayout className="search">
            <Seo title={`Buscando: ${query.query}`}/>
            {!games && <Loader active>Buscando Juegos..</Loader>}
            {games && size(games) === 0 && (
                <div><h3>No se han encontrado juegos</h3></div>
            )}
            {size(games) > 0 && <ListGames games={games} />}
            <ListGames />
        </BasicLayout>
    )
}
