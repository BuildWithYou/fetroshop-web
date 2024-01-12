"use client";

import { useEffect, useState } from "react";
import Breadcrumb from "../../../components/global/BreadCrumb";
import ContentBrand from "./components/ContentBrand";
import SideBar from "./components/SideBar";
import ModalSearchBrand from "./components/ModalSearchBrand";
import { dataBrands } from "./dataBrands";

const BrandsPage: React.FC = () => {
  const paths = [
    { name: "Home", url: "/", active: true },
    { name: "Brand", url: "/brands", active: false },
  ];

  const [modalIsOpen, setModalOpen] = useState<boolean>(false);
  const [categoryBrands, setCategoryBrands] = useState<string>("A");
  const [searchValue, setSearchValue] = useState<string>("");
  const [filteredData, setFilteredData] = useState<string[]>([]);

  useEffect(() => {
    const getData = () => {
      const filteredDataBrands = dataBrands.filter((item) =>
        item.startsWith(categoryBrands)
      );
      setFilteredData(filteredDataBrands);
    };

    getData();
  }, [categoryBrands]);

  const handleModalToggle = () => {
    setModalOpen(!modalIsOpen);
  };

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const handleSearchClick = () => {
    const filterData = dataBrands.filter((item) =>
      item.startsWith(categoryBrands)
    );
    const searchData = filterData.filter((item) =>
      item.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(searchData);
    setModalOpen(false);
    setSearchValue("");
  };

  const handleChangeCategory = (category: string) => {
    setCategoryBrands(category);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-full 2xl:w-3/4 mx-2 2xl:mx-0">
        <Breadcrumb paths={paths} />
        <h2 className="text-2xl mt-10">Semua Brand</h2>
        <div className="flex mt-8 w-full relative mb-12">
          <SideBar
            handleModalToggle={handleModalToggle}
            modalIsOpen={modalIsOpen}
            handleChangeCategory={handleChangeCategory}
            category={categoryBrands}
          />
          <div className="relative w-full flex-grow">
            <ModalSearchBrand
              isOpen={modalIsOpen}
              category={categoryBrands}
              handleSearchChange={handleSearchChange}
              searchValue={searchValue}
              handleSearchClick={handleSearchClick}
            />
            <ContentBrand category={categoryBrands} dataBrands={filteredData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandsPage;
