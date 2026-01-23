//Integration Test = Test multiple unit of code working together
import { it, expect, describe, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import Product from "./Product";

//Mocking axios
vi.mock("axios");

//Test suite
describe("Product Component", () => {

  let product;
  let loadCart;
  let user;

  //beforeEach to remove redundancy
    beforeEach(() => {
      product = {
        id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        image: "images/products/athletic-cotton-socks-6-pairs.jpg",
        name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
        rating: {
          stars: 4.5,
          count: 87,
        },
        priceCents: 1090,
        keywords: ["socks", "sports", "apparel"],
      };      
      axios.post.mockResolvedValue({ data: {} });
      user = userEvent.setup();
    });


  //it = creates a test case, expect = assertion to check if the code works as expected
  it("renders product details correctly", async () => {
    //to mock a function
    loadCart = vi.fn();
    
    //renders a component in a fake webpage
    render(<Product product={product} loadCart={loadCart} />);

    //Test = checks - if the component is rendered correctly
    expect(
      screen.getByText("Black and Gray Athletic Cotton Socks - 6 Pairs"),
    ).toBeInTheDocument();

    expect(screen.getByTestId("product-image")).toHaveAttribute(
      "src",
      "images/products/athletic-cotton-socks-6-pairs.jpg",
    );

    expect(screen.getByText("$10.90")).toBeInTheDocument();

    expect(screen.getByTestId("product-rating-stars")).toHaveAttribute(
      "src",
      "images/ratings/rating-45.png",
    );
    expect(screen.getByText("87")).toBeInTheDocument();

  

    //Test = simulate user interaction
    const addToCartButton = screen.getByTestId("add-to-cart-button");
    await user.click(addToCartButton);
    
    expect(axios.post).toHaveBeenCalledWith("/api/cart-items", {
      productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity: 1,
    });
    expect(loadCart).toHaveBeenCalled();
  });

  it('select a qualtity',async () =>{
    render(<Product product={product} loadCart={loadCart} />);
    const quantitySelector = screen.getByTestId("product-quantity-select");
    expect(quantitySelector).toHaveValue('1');

    //simulate user interaction    
    await user.selectOptions(quantitySelector,'3');
    expect(quantitySelector).toHaveValue('3');

    //simulate adding to cart with selected quantity
    const addToCartButton = screen.getByTestId("add-to-cart-button");
    await user.click(addToCartButton);
    expect(axios.post).toHaveBeenCalledWith("/api/cart-items", {
      productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity: 3,
    });
    expect(loadCart).toHaveBeenCalled();
  })
});
