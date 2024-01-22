"use client";

import { Menu, Popover, Transition } from "@headlessui/react";
import {
  ChevronRightIcon,
  DevicePhoneMobileIcon,
  MapPinIcon,
  Squares2X2Icon,
} from "@heroicons/react/16/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import { basePath } from "../../../next.config";
import ThemeToggle from "./themeToggle";
import Button from "../global/Button";
import cn from "@/src/utils/cn";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { useSelector } from "react-redux";
import PopUpMobile from "../global/PopUpMobile";

const solutions = [
  {
    name: "Kebutuhan Dapur",
    description: "Measure actions your users take",
    href: "##",
    icon: "/images/logo.png",
  },
  {
    name: "Kebutuhan Ibu & Anak",
    description: "Create your own targeted content",
    href: "##",
    icon: "/images/logo.png",
  },
  {
    name: "Kebutuhan Rumah",
    description: "Keep track of your growth",
    href: "##",
    icon: "/images/logo.png",
  },
  {
    name: "Makanan",
    description: "Keep track of your growth",
    href: "##",
    icon: "/images/logo.png",
  },
  {
    name: "Minuman",
    description: "Keep track of your growth",
    href: "##",
    icon: "/images/logo.png",
  },
  {
    name: "Produk Segar & Beku",
    description: "Keep track of your growth",
    href: "##",
    icon: "/images/logo.png",
  },
  {
    name: "Personal Care",
    description: "Keep track of your growth",
    href: "##",
    icon: "/images/logo.png",
  },
  {
    name: "Kebutuhan Kesehatan",
    description: "Keep track of your growth",
    href: "##",
    icon: "/images/logo.png",
  },
  {
    name: "Lifestyle",
    description: "Keep track of your growth",
    href: "##",
    icon: "/images/logo.png",
  },
  {
    name: "Pet Foods",
    description: "Keep track of your growth",
    href: "##",
    icon: "/images/logo.png",
  },
];

export default function Header() {
  const darkMode = useSelector((state: any) => state.theme.darkMode);
  const [scrollY, setScrollY] = useState(0);
  const [isLogin, setIsLogin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

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
            "w-full flex flex-row justify-between gap-2 2xl:w-3/4 text-lg p-4" +
            (scrollY > 50
              ? " bg-primary/80 dark:bg-primary"
              : " bg-primary/80 dark:bg-primaryDark lg:bg-transparent lg:dark:bg-primaryDark")
          }
        >
          <Link href="/" className="hidden lg:block">
            <Image
              src={basePath + "/images/logo.png"}
              width={100}
              height={100}
              className="mr-3 h-6 sm:h-9"
              alt="Fetroshop Logo"
            />
          </Link>
          <Button
            size="xs"
            variant="inlineLight"
            className={
              pathname == "/" ? "hidden focus:ring-0" : "lg:hidden focus:ring-0"
            }
            onClick={() => router.back()}
          >
            <ArrowLeftIcon className="w-6 font-semibold text-md" />
          </Button>
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
                    <Popover.Panel className="absolute left-1/3 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 bg-light dark:bg-secondaryDark text-dark dark:text-light ring-black/5">
                        <div className="p-4">
                          <span className="text-lg font-semibold">
                            Kategori
                          </span>
                        </div>
                        <div className="relative grid gap-8 p-7 lg:grid-cols-2">
                          {solutions.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-center rounded-lg  transition duration-150 ease-in-out hover:bg-slate-300 dark:hover:bg-slate-500"
                            >
                              <div className="w-full flex flex-row justify-between ml-4">
                                <p className="flex flex-row gap-2 text-md font-medium">
                                  <Image
                                    src={basePath + item.icon}
                                    alt={item.name}
                                    width={20}
                                    height={20}
                                  />
                                  {item.name}
                                </p>
                                <ChevronRightIcon className="w-4" />
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </div>
          <div className="w-auto md:w-4/5 lg:w-1/3 2xl:w-1/3 flex rounded-md">
            <input
              placeholder="Cari Produk"
              className="w-full rounded-l-md border-1 border-primary border-r-0 dark:bg-secondaryDark focus:ring-0 px-3"
            />
            <Button className="rounded-l-none">
              <MagnifyingGlassIcon className="w-6" />
            </Button>
          </div>
          <div className="hidden lg:flex justify-between items-center lg:w-1/3">
            <Link href="/brands" className="hover:text-info">
              Brand
            </Link>
            <Link href="/promo" className="hover:text-info">
              Promo
            </Link>
            <Link href="/cart" className="hover:text-info">
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
                  <Menu.Items className="absolute right-0 2xl:-right-20 top-10 z-10 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-primaryDark backdrop-blur shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <div className="flex flex-col px-4 py-2">
                        <span className="text-sm">Bonnie Green</span>
                        <span className="truncate text-sm font-medium">
                          name@fetroshop.com
                        </span>
                      </div>
                      <hr className="border-primary dark:border-primary" />
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
                <Link href="/register" className="hover:text-info">
                  Daftar
                </Link>
                <Link href="/login" className="hover:text-info">
                  Masuk
                </Link>
              </>
            )}
          </div>
          <Link href="/cart" className="lg:hidden flex justify-center mr-2">
            <ShoppingCartIcon className="w-6" />
          </Link>
          <button
            className="lg:hidden mr-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Squares2X2Icon className="w-6" />
          </button>
          <PopUpMobile
            title="Menu"
            open={menuOpen}
            onClose={() => setMenuOpen(!menuOpen)}
          >
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
                  <Button
                    variant="secondary"
                    onClick={() => {
                      setMenuOpen(!menuOpen);
                      router.push("/register");
                    }}
                  >
                    Daftar
                  </Button>
                  <Button
                    onClick={() => {
                      setMenuOpen(!menuOpen);
                      router.push("/login");
                    }}
                  >
                    Masuk
                  </Button>
                </div>
              )}
            </div>
            <hr className=" border-primary dark:border-primaryDark" />
            <div className="flex flex-col my-5">
              <h2 className="mb-2 font-semibold">Menu Utama</h2>
              <ul className="w-full">
                <li className="mt-2">
                  <Button
                    variant={darkMode ? "inlineLight" : "inlineDark"}
                    onClick={() => setCategoryOpen(!categoryOpen)}
                  >
                    Semua Kategori
                  </Button>
                </li>
                <PopUpMobile
                  title="Semua Kategori"
                  open={categoryOpen}
                  onClose={() => setCategoryOpen(!categoryOpen)}
                >
                  <ul className="w-full grid gap-4 py-6">
                    {solutions.map((item) => (
                      <li key={item.name}>
                        <Button
                          className="gap-4 pl-0 rounded-lg transition duration-150 ease-in-out focus:ring-0"
                          variant={darkMode ? "inlineLight" : "inlineDark"}
                          onClick={() => {
                            setCategoryOpen(!categoryOpen);
                            setMenuOpen(!menuOpen);
                            router.push(item.href);
                          }}
                          size="lg"
                        >
                          <Image
                            src={basePath + item.icon}
                            alt={item.name}
                            width={20}
                            height={20}
                          />
                          {item.name}
                        </Button>
                      </li>
                    ))}
                  </ul>
                </PopUpMobile>
                <li className="mt-2">
                  <Button
                    variant={darkMode ? "inlineLight" : "inlineDark"}
                    onClick={() => {
                      setMenuOpen(!menuOpen);
                      router.push("/promo");
                    }}
                  >
                    Promo
                  </Button>
                </li>
                <li className="mt-2">
                  <Button
                    variant={darkMode ? "inlineLight" : "inlineDark"}
                    onClick={() => {
                      setMenuOpen(!menuOpen);
                      router.push("/brands");
                    }}
                  >
                    Brand
                  </Button>
                </li>
              </ul>
            </div>
            <hr className=" border-primary dark:border-primaryDark" />
            <div className="flex flex-col my-5">
              <h2 className="mb-2 font-semibold">Layanan Pelanggan</h2>
              <ul className="w-full">
                <li className="mt-2">
                  <Button
                    variant={darkMode ? "inlineLight" : "inlineDark"}
                    onClick={() => {
                      setMenuOpen(!menuOpen);
                      router.push("/");
                    }}
                  >
                    Pertanyaan Umum
                  </Button>
                </li>
                <li className="mt-2">
                  <Button
                    variant={darkMode ? "inlineLight" : "inlineDark"}
                    onClick={() => {
                      setMenuOpen(!menuOpen);
                      router.push("/");
                    }}
                  >
                    Cara Belanja
                  </Button>
                </li>
                <li className="mt-2">
                  <Button
                    variant={darkMode ? "inlineLight" : "inlineDark"}
                    onClick={() => {
                      setMenuOpen(!menuOpen);
                      router.push("/");
                      console.log(darkMode);
                    }}
                  >
                    Gratis Ongkir
                  </Button>
                </li>
              </ul>
            </div>
            <hr className=" border-primary dark:border-primaryDark" />
            <div className="flex flex-col my-5">
              <h2 className="mb-2 font-semibold">Jelajahi Fetroshop</h2>
              <ul className="w-full">
                <li className="mt-2">
                  <Button
                    variant={darkMode ? "inlineLight" : "inlineDark"}
                    onClick={() => {
                      setMenuOpen(!menuOpen);
                      router.push("/");
                    }}
                  >
                    Tentang Fetroshop
                  </Button>
                </li>
                <li className="mt-2">
                  <Button
                    variant={darkMode ? "inlineLight" : "inlineDark"}
                    onClick={() => {
                      setMenuOpen(!menuOpen);
                      router.push("/");
                    }}
                  >
                    Syarat & Ketentuan
                  </Button>
                </li>
                <li className="mt-2">
                  <Button
                    variant={darkMode ? "inlineLight" : "inlineDark"}
                    onClick={() => {
                      setMenuOpen(!menuOpen);
                      router.push("/");
                    }}
                  >
                    Kebijakan Privasi
                  </Button>
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
          </PopUpMobile>
        </nav>
        {scrollY < 50 && (
          <div className="w-full flex flex-row lg:hidden items-center mb-2 px-3">
            <MapPinIcon className="w-4 mr-2" />
            <p>
              <span>Blitar</span>. Masuk untuk ubah lokasi.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
