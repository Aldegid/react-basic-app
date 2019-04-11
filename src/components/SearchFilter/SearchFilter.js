import React from "react";
import "./searchfilter.css";

const SearchFilter = ({ handleChange, handleSearch}) => {

  //console.log(handleChange, handleSearch)

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
    //console.log(value);
  };
  const onChange = (e) => {
    const form = e.target.closest(".form");
    const value = Array.from(form).reduce((acc, input) => {
      if (input.name === 'change') {
        return { ...acc, [input.name] : input.value}
      }
      if (input.checked) {
        return { ...acc, [input.value]: true };
      }
      return acc;
    }, {});

    handleSearch(value);
  };

  return (
    <form onSubmit={onSubmit} onChange={onChange} className="form">
      <div className="sort-asc-desc d-inline-flex ml-2 mr-2">
        <div className="form-check form-check-inline m-2">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="asc"
          />
          <label className="form-check-label" htmlFor="inlineRadio1">
            Sort by Asc
          </label>
        </div>
        <div className="form-check form-check-inline m-2">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="desc"
          />
          <label className="form-check-label" htmlFor="inlineRadio2">
            Sort by Desc
          </label>
        </div>
      </div>
      <div className="sort-asc-desc d-inline-flex ml-2 mr-2">
        <div className="form-check form-check-inline m-2">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioFilter"
            id="inlineRadio3"
            value="human"
          />
          <label className="form-check-label" htmlFor="inlineRadio3">
            Filter by Human
          </label>
        </div>
        <div className="form-check form-check-inline m-2">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioFilter"
            id="inlineRadio4"
            value="alien"
          />
          <label className="form-check-label" htmlFor="inlineRadio4">
            Filter by Alien
          </label>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="input-group mb-2">
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="onSubmit filter by name... "
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary">Button</button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="input-group mb-2">
            <input
              type="text"
              className="form-control"
              name="change"
              placeholder="onChange filter by name... "
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default SearchFilter;
