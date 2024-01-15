import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../components';
import { getHeroesByName } from '../helpers';

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Search Page</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching...</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search a Hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-2">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results:</h4>
          <hr />
          {q === '' ? (
            <div className="alert alert-primary">Search a Hero.</div>
          ) : (
            heroes.length === 0 && (
              <div className="alert alert-danger">
                <b>{q}</b> not found.
              </div>
            )
          )}

          {heroes.map((h) => (
            <HeroCard key={h.id} {...h} />
          ))}
        </div>
      </div>
    </>
  );
};
