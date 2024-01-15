/* eslint-disable react/prop-types */
import { useMemo } from 'react';
import { HeroCard } from './HeroCard';
import { getHeroesByPublisher } from '../helpers';

export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {heroes.map((h) => (
        <HeroCard key={h.id} {...h} className="animate__animated animate__fadeIn" />
      ))}
    </div>
  );
};
