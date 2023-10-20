import React, { useEffect } from "react";
import { useStarShipsMutation } from "../../store/apis/star-ships.store.api";
import { useSelector } from "react-redux";
import StarShipsLists from "./components/Star-ships-lists";

const StartShips = () => {
    const [getStarShips, { isLoading }] = useStarShipsMutation();
    const { starShips } = useSelector((state: any) => state.starShips);
    let abortStarShips: any = null;

    const getStarShipsData = () => {
        // to integrate the API on load...
        abortStarShips = getStarShips({});
    };

    useEffect(() => {
        getStarShipsData();
        return () => {
            // to clean on component unmount..
            abortStarShips.abort();
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (isLoading) {
        return (
            // To load the skeleton component or spinner-loader or any loading component...
            <h2>Loading....</h2>
        );
    }

    return (
        <div className="star-ships">
            <div className="ships">
                <StarShipsLists data={starShips} />
            </div>
        </div>
    );
};

export default StartShips;
