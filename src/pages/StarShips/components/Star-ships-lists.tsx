import React, { useCallback, useEffect, useRef, useState } from "react";
import StarShipList from "./Star-ship-list";

export type SortDirection = 'asc' | 'desc';

const onSortData = (data: any[], key: string, sortDirection?: SortDirection) => {
    let direction = sortDirection || 'asc';
    let firstNumber = -1;
    let secondNumber = 1;
    if (direction === 'desc') {
        firstNumber = 1;
        secondNumber = -1;
    }
    return data.slice().sort((first, second) => {
        const firstCrew = parseInt(first[key]);
        const secondCrew = parseInt(second[key]);
        if (firstCrew < secondCrew) {
            return firstNumber;
        } else if (firstCrew > secondCrew) {
            return secondNumber;
        }
        return 0;
    });
};

const findMaxFilmedShips = (data: any[]) => {
    let max = 0;
    let len;
    data.forEach((ship: any) => {
        len = ship.films.length;
        if (len > max) {
            max = len;
        }
    });
    return max;
}

const StarShipsLists = (props: any) => {
    const { data } = props;
    const sortRef = useRef<SortDirection>('asc');
    const [starShipsLists, setStarShipsLists] = useState<any[]>([]);

    const sortData = (sortableData: any[]) => {
        const sorted = onSortData(sortableData, 'crew', sortRef.current);
        setStarShipsLists(sorted);
    };

    useEffect(() => {
        const max = findMaxFilmedShips(data);

        const filtered = data
            .map((ship: any) => {
                const isMaximumFilmed = (ship.films.length === max) ? true : false;
                return {
                    ...ship,
                    max_filmed: isMaximumFilmed,
                    image_url: "https://media.npr.org/assets/img/2023/04/14/spacex_starship_hls_artemis_iii_2_crew_0-8d26a26eaf9fefb46e2b831b36005ac6e5d8b297.jpg"
                };
            })
            .filter((ship: any) => parseInt(ship.crew) > 10);
        sortData(filtered);
    }, [data]);

    const onSort = useCallback(() => {
        if (sortRef.current === 'asc') {
            sortRef.current = 'desc';
        } else {
            sortRef.current = 'asc';
        }
        sortData(starShipsLists);
    }, [starShipsLists]);

    return (
        <div className="star-ships-container">
            <p className="py-1">Sort the ships with crew: </p>
            <button onClick={onSort}>Sort</button>
            <hr />
            <div className="star-ships-lists">
                {
                    starShipsLists.length > 0 && starShipsLists.map((ship: any) => (
                        <StarShipList key={ship.created} data={ship} />
                    ))
                }
            </div>
        </div>
    );
};

export default React.memo(StarShipsLists);
