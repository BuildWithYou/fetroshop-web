"use client";

import { Dialog, Menu, Popover, Transition } from "@headlessui/react";
import {
  DevicePhoneMobileIcon,
  MapPinIcon,
  Squares2X2Icon,
  XMarkIcon,
} from "@heroicons/react/16/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import { basePath } from "../../../next.config";
import ThemeToggle from "./themeToggle";
import Button from "../global/Button";
import cn from "@/app/utils/cn";

const solutions = [
  {
    name: "Insights",
    description: "Measure actions your users take",
    href: "##",
  },
  {
    name: "Automations",
    description: "Create your own targeted content",
    href: "##",
  },
  {
    name: "Reports",
    description: "Keep track of your growth",
    href: "##",
  },
];

export default function Header() {
  const [scrollY, setScrollY] = useState(0);
  const [isLogin, setIsLogin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="hidden lg:flex flex-col items-center w-full bg-secondary dark:bg-primaryDark backdrop-blur py-1 px-3">
        <div className="flex flex-row justify-between items-center w-full 2xl:w-3/4 text-light">
          <div className="flex flex-row items-center">
            <MapPinIcon className="w-4 mr-2" />
            <p>
              <span>Blitar</span>. Masuk untuk ubah lokasi.
            </p>
          </div>
          <div className="flex flex-row items-center">
            <Link href="" className="mx-4 hover:text-info">
              Layanan Pelanggan
            </Link>
            <Link href="" className="mx-4 hover:text-info">
              Jelajah Fetroshop
            </Link>
            <Link href="" className="flex flex-row ml-4 hover:text-info">
              <DevicePhoneMobileIcon className="w-4 mr-1" />
              Download Fetroshop App
            </Link>
          </div>
        </div>
      </div>
      <div
        className={
          "flex flex-col items-center font-bold text-sm" +
          (scrollY > 50
            ? "  bg-primary dark:bg-primary backdrop-blur text-light"
            : " bg-primary/80 dark:bg-primaryDark lg:bg-transparent lg:dark:bg-primaryDark border-b-2 border-b-primary lg:text-dark dark:text-light")
        }
      >
        <nav
          className={
            "w-full flex flex-row justify-between 2xl:w-3/4 text-lg p-4" +
            (scrollY > 50
              ? " bg-primary/80 dark:bg-primary"
              : " bg-primary/80 dark:bg-primaryDark lg:bg-transparent lg:dark:bg-primaryDark")
          }
        >
          <Link href="https://flowbite-react.com" className="hidden lg:block">
            <Image
              src={basePath + "/images/logo.png"}
              width={100}
              height={100}
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite React Logo"
            />
          </Link>
          <div className="hidden lg:block">
            <Popover>
              {({ open }) => (
                <>
                  <Popover.Button
                    className={`${
                      open && "text-info"
                    } group inline-flex items-center rounded-md px-3 py-2 text-base font-medium hover:text-info focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
                  >
                    <Squares2X2Icon className="w-6 mr-2" />
                    <span>Kategori</span>
                  </Popover.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                        <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                          {solutions.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
                            >
                              <div className="ml-4">
                                <p className="text-sm font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="text-sm text-gray-500">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="bg-gray-50 p-4">
                          <a
                            href="##"
                            className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
                          >
                            <span className="flex items-center">
                              <span className="text-sm font-medium text-gray-900">
                                Documentation
                              </span>
                            </span>
                            <span className="block text-sm text-gray-500">
                              Start integrating products and tools
                            </span>
                          </a>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </div>
          <div className="w-3/4 md:w-4/5 lg:w-1/3 2xl:w-1/3 flex rounded-md">
            <input
              placeholder="Cari Produk"
              className="w-full rounded-l-md border-2 border-primary border-r-0 px-3"
            />
            <Button className="rounded-l-none">
              <MagnifyingGlassIcon className="w-6" />
            </Button>
          </div>
          <div className="hidden lg:flex justify-between items-center lg:w-1/3">
            <Link href="#" className="hover:text-info">
              Brand
            </Link>
            <Link href="/promo" className="hover:text-info">
              Promo
            </Link>
            <Link href="#" className="hover:text-info">
              <ShoppingCartIcon className="w-6" />
            </Link>
            <div className="border-l-2 h-8" />
            <ThemeToggle />
            {isLogin ? (
              <Menu as="div" className="relative flex text-left">
                <Menu.Button>
                  <Image
                    className="rounded-full w-7 p-0"
                    width={100}
                    height={100}
                    alt="User settings"
                    src={basePath + "/images/user.jpg"}
                  />
                </Menu.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 top-10 z-10 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-primaryDark backdrop-blur shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {/* <span className="block text-sm">Bonnie Green</span>
                  <span className="block truncate text-sm font-medium">
                    name@flowbite.com
                  </span> */}
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="#"
                            className={cn(
                              active
                                ? "bg-light text-primary dark:bg-primaryDark dark:text-info"
                                : "text-dark dark:text-light",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Profile
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="#"
                            className={cn(
                              active
                                ? "bg-light text-primary dark:bg-primaryDark dark:text-info"
                                : "text-dark dark:text-light",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Daftar Transaksi
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="#"
                            className={cn(
                              active
                                ? "bg-light text-primary dark:bg-primaryDark dark:text-info"
                                : "text-dark dark:text-light",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Messages
                          </Link>
                        )}
                      </Menu.Item>
                      <form method="POST" action="#">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              type="submit"
                              className={cn(
                                active
                                  ? "bg-light text-primary dark:bg-primaryDark dark:text-info"
                                  : "text-dark dark:text-light",
                                "block w-full px-4 py-2 text-left text-sm"
                              )}
                            >
                              Sign out
                            </button>
                          )}
                        </Menu.Item>
                      </form>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            ) : (
              <>
                <Link href="#" className="hover:text-info">
                  Daftar
                </Link>
                <Link href="#" className="hover:text-info">
                  Masuk
                </Link>
              </>
            )}
          </div>
          <button className="lg:hidden">
            <ShoppingCartIcon className="w-6 mr-2" />
          </button>
          <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Squares2X2Icon className="w-6 mr-2" />
          </button>
          <Dialog
            open={menuOpen}
            onClose={() => setMenuOpen(!menuOpen)}
            className="relative z-50"
          >
            <div className="fixed inset-0 bg-black" aria-hidden="true" />
            <div className="fixed inset-0 flex w-screen h-screen items-center justify-center">
              <Dialog.Panel className="w-screen h-screen rounded text-dark dark:text-light bg-white dark:bg-dark backdrop-blur py-5 px-6">
                <XMarkIcon
                  className="w-7 absolute top-5 right-6 cursor-pointer"
                  onClick={() => setMenuOpen(!menuOpen)}
                />
                <Dialog.Title className="font-semibold">Menu</Dialog.Title>
                <hr className=" border-primary dark:border-primaryDark mt-5" />
                <div className="flex flex-col my-5">
                  {isLogin ? (
                    <>
                      <h2 className="mb-2 font-semibold">Akun Saya</h2>
                      <ul className="w-full">
                        <li className="mt-2">
                          <Link href="#">Profile</Link>
                        </li>
                        <li className="mt-2">
                          <Link href="#">Daftar Transaksi</Link>
                        </li>
                        <li className="mt-2">
                          <Link href="#">Messages</Link>
                        </li>
                        <li className="mt-2">
                          <Link href="#">Settings</Link>
                        </li>
                        <li className="mt-2">
                          <Link href="#">Log Out</Link>
                        </li>
                      </ul>
                    </>
                  ) : (
                    <div className="grid grid-cols-2 gap-4">
                      <Button variant="secondary">Daftar</Button>
                      <Button>Masuk</Button>
                    </div>
                  )}
                </div>
                <hr className=" border-primary dark:border-primaryDark" />
                <div className="flex flex-col my-5">
                  <h2 className="mb-2 font-semibold">Menu Utama</h2>
                  <ul className="w-full">
                    <li className="mt-2">
                      <Link href="#">Semua Kategori</Link>
                    </li>
                    <li className="mt-2">
                      <Link href="#">Promo</Link>
                    </li>
                    <li className="mt-2">
                      <Link href="#">Brand</Link>
                    </li>
                  </ul>
                </div>
                <hr className=" border-primary dark:border-primaryDark" />
                <div className="flex flex-col my-5">
                  <h2 className="mb-2 font-semibold">Layanan Pelanggan</h2>
                  <ul className="w-full">
                    <li className="mt-2">
                      <Link href="#">Pertanyaan Umum</Link>
                    </li>
                    <li className="mt-2">
                      <Link href="#">Cara Belanja</Link>
                    </li>
                    <li className="mt-2">
                      <Link href="#">Gratis Ongkir</Link>
                    </li>
                  </ul>
                </div>
                <hr className=" border-primary dark:border-primaryDark" />
                <div className="flex flex-col my-5">
                  <h2 className="mb-2 font-semibold">Jelajahi Fetroshop</h2>
                  <ul className="w-full">
                    <li className="mt-2">
                      <Link href="#">Tentang Fetroshop</Link>
                    </li>
                    <li className="mt-2">
                      <Link href="#">Syarat & Ketentuan</Link>
                    </li>
                    <li className="mt-2">
                      <Link href="#">Kebijakan Privasi</Link>
                    </li>
                  </ul>
                </div>
                <hr className=" border-primary dark:border-primaryDark" />
                <div className="flex flex-col my-5">
                  <h2 className="mb-2 font-semibold">Theme</h2>
                  <div className="cursor-pointer mt-2">
                    <ThemeToggle />
                  </div>
                </div>
              </Dialog.Panel>
            </div>
          </Dialog>
        </nav>
        <div className="w-full flex flex-row lg:hidden items-center mb-2 px-3">
          <MapPinIcon className="w-4 mr-2" />
          <p>
            <span>Blitar</span>. Masuk untuk ubah lokasi.
          </p>
        </div>
      </div>
    </>
  );
}
