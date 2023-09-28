import React from "react";
import { Form, useLoaderData, Link } from "react-router-dom";
import FormCheckBox from "./FormCheckBox";
import FormInput from "./FormInput";
import FormRange from "./FormRange";
import FormSelect from "./FormSelect";

function Filters() {
  const { meta, params } = useLoaderData();
  const { search, company, category, shipping, order, price } = params;
  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center ">
      {/* search */}
      <FormInput
        type="search"
        label="Search Product"
        name="search"
        size="input-md"
      />
      {/* category */}
      <FormSelect
        label="Select Category"
        name="category"
        defaultValue={category}
        list={meta.categories}
        size="input-md"
      />
      {/* company */}
      <FormSelect
        label="Company"
        name="company"
        defaultValue={company}
        list={meta.companies}
        size="input-md"
      />
      {/* sort by */}
      <FormSelect
        label="Sort By"
        name="order"
        defaultValue={order}
        list={["a-z", "z-a", "high", "low"]}
        size="input-md"
      />
      {/* price range */}
      <FormRange
        label="Select Price"
        name="price"
        size="range-md"
        price={price}
      />
      {/* shipping */}
      <FormCheckBox
        name="shipping"
        size="input-sm"
        label="Free Shipping"
        defaultValue={shipping}
      />
      {/* buttons */}
      <button className="btn btn-primary btn-sm">search</button>
      <Link to="/products" className="btn btn-accent btn-sm">
        reset
      </Link>
    </Form>
  );
}

export default Filters;
