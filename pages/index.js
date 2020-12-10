import { useState, useEffect } from 'react';
import { Loader } from 'semantic-ui-react'
import { getLastGamesApi } from '../api/game';
import BasicLayout from "../layouts/BasicLayout";
import { size } from 'lodash'
import ListGames from '../components/ListGames'
import Seo from '../components/Seo'
export default function Home() {
    const [games, setGames] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await getLastGamesApi(50);
            if (size(response) > 0) setGames(response);
            else setGames([]);
        })()
    }, []);

    return (
        <BasicLayout className="home">
            <Seo />
            {!games && <Loader active>Cargando Juegos</Loader>}
            {games && size(games) === 0 && (<div><h3>No existen Juegos</h3></div>)}
            {size(games) > 0 && (<ListGames games={games} />)}
        </BasicLayout>
    )
}