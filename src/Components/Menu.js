import axios from "axios";
import React, { useEffect, useState } from "react";
import "./style.css";
import "tw-elements";
import ReactLoading from "react-loading";

const Menu = () => {
  const [meal, setMeal] = useState([]);

  const [foodModal, setFoodModal] = useState([]);
  const [loading, setLoading] = useState(true);

  const getFoodModal = async (idMeal) => {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    );
    // console.log(res.data.meals[0]);
    setTimeout(() => {
      setFoodModal(res.data.meals[0]);
      setLoading(false);
    }, 2000);
  };

  const getMeal = async () => {
    const res = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/search.php?s="
    );
    console.log(res.data.meals);
    setMeal(res.data.meals.slice(0, 6));
  };

  useEffect(() => {
    getMeal();
    getFoodModal();
  }, []);

  return (
    <section id="Menu ">
      <div className="bg-menu h-full flex flex-col items-center p-32 max-lg:px-4">
        <h2
          className="title -mb-8 max-lg:text-6xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Discover
        </h2>
        <h4
          className="sub-title text-white z-10 max-lg:text-4xl"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Our Menu
        </h4>

        <div className="m-10 p-5 bg-opacity-20 bg-white w-full h-full rounded-md flex flex-wrap justify-center gap-6">
          {meal.map((m) => (
            <div className=" w-1/4 bg-white h-auto rounded-md card-shadow max-lg:w-full">
              <img
                src={m.strMealThumb}
                alt="gambar"
                className="object-cover rounded-t-md"
              />
              <div className="py-5 px-4">
                <h2 className=" font-medium truncate text-left ">
                  {m.strMeal}
                </h2>
                <h4 className="text-xs  mt-1">{m.strArea}</h4>

                <button
                  className="mt-10 flex"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModalXl"
                  type="button"
                  value={foodModal}
                  onClick={(e) => getFoodModal(m.idMeal)}
                >
                  Read More
                </button>

                <div
                  class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                  id="exampleModalXl"
                  tabindex="-1"
                  aria-labelledby="exampleModalXlLabel"
                  aria-modal="true"
                  role="dialog"
                >
                  <div class="modal-dialog modal-xl relative w-auto pointer-events-none">
                    <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                      {loading ? (
                        <>
                          <div className="flex justify-center items-center h-screen">
                            <ReactLoading
                              type="bars"
                              color="red"
                              width={64}
                              height={64}
                            ></ReactLoading>
                          </div>
                        </>
                      ) : (
                        <>
                          <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                            <h5
                              class="text-xl font-medium leading-normal text-gray-800"
                              id="exampleModalXlLabel"
                            >
                              {foodModal.strMeal}
                            </h5>
                            <button
                              type="button"
                              class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>

                          <div class="modal-body relative p-4 flex">
                            <div className="col-50">
                              <div className="w-full p-4">
                                <img
                                  src={foodModal.strMealThumb}
                                  alt="gambar orang"
                                  className="object-cover rounded-md"
                                />
                              </div>
                            </div>
                            <div className="col-50 p-4">
                              <h2 className="judul uppercase text-black mb-2">
                                Food Name
                              </h2>
                              <h2 className="text-xl">{foodModal.strMeal}</h2>
                              <h2 className="judul uppercase text-black mt-1 mb-2">
                                Category
                              </h2>
                              <h2 className="text-xl">
                                {foodModal.strCategory}
                              </h2>
                              <h2 className="judul uppercase text-black mt-1 mb-2">
                                Instructions
                              </h2>
                              <h2 className="text-xl">
                                {foodModal.strInstructions}
                              </h2>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
