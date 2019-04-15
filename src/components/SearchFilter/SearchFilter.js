import React from "react";
import "./searchfilter.css";

const SearchFilter = ({ handleSort, handleSearch, handleFilter }) => {
  const onSubmit = e => {
    e.preventDefault();
    const { elements } = e.target;

    const value = Array.from(elements).reduce((acc, input) => {
      if (input.name) {
        return { ...acc, [input.name]: input.value };
      }
      return acc;
    }, {});
    handleSearch(value);
  };
  const onChange = e => {
    const target = e.target;
    const value = target.name === "change" ? target.value : "";

    handleSearch({
      [target.name]: value
    });
  };
  const onSort = e => {
    const target = e.target;
    const radioState = () => {
      if (target.checked && target.type === "radio") {
        return true;
      }
    };
    handleSort({
      [target.value]: radioState()
    });
  };
  const onFilter = e => {
    const target = e.target;
    const radioState = () => {
      if (target.checked && target.type === "radio") {
        return true;
      }
    };
    handleFilter({
      [target.value]: radioState()
    });
  };

  return (
    <form onSubmit={onSubmit} className="form__main">
      <div className="radio-buttons">
        <div className="sort-asc-desc">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="asc"
              onChange={onSort}
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              Sort by Asc
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="desc"
              onChange={onSort}
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              Sort by Desc
            </label>
          </div>
        </div>
        <div className="sort-asc-desc">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioFilter"
              id="inlineRadio3"
              value="human"
              onChange={onFilter}
            />
            <label className="form-check-label" htmlFor="inlineRadio3">
              Filter by Human
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioFilter"
              id="inlineRadio4"
              value="alien"
              onChange={onFilter}
            />
            <label className="form-check-label" htmlFor="inlineRadio4">
              Filter by Alien
            </label>
          </div>
        </div>
      </div>

      <div className="input-group">
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="onSubmit filter by name... "
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <div className="input-group">
          <button className="button">Button</button>
        </div>
      </div>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          name="change"
          placeholder="onChange filter by name... "
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          onChange={onChange}
        />
      </div>
    </form>
  );
};

export default SearchFilter;