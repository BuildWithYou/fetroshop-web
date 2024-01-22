"use client";
import { UserCircleIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Accordion from "../global/Accordion";
import Link from "next/link";
import { useSelector } from "react-redux";
import { ProfileState } from "@/src/redux/slicers/profileSlice";

const SidebarDashboard = () => {
  const transactions = [
    { name: "Menunggu Pembayaran", link: "#" },
    { name: "Pesanan Dalam Proses", link: "#" },
    { name: "Pesanan Dikirim", link: "#" },
    { name: "Pesanan Selesai", link: "#" },
    { name: "Pesanan Batal", link: "#" },
  ];

  const profiles = [
    {name: "Akun Saya", link: "/account-dashboard"},
    {name: "Reset Password", link: "/reset-password"},
  ]

  const dataProfile = useSelector(
    (state: { profile: ProfileState }) => state?.profile
  );

  return (
    <div className="h-auto w-full border border-gray-300 rounded-md bg-white dark:bg-dark text-dark dark:text-white">
      <ProfileSection image={dataProfile?.image} name="Mitro Ubaidillah" />
      <PointSection total={10} />
      <TransactionSection transactions={transactions} />
      <AccountSection transactions={profiles} />
    </div>
  );
};

interface SectionProps {
  children: React.ReactNode;
  border?: boolean;
}

interface ProfileSectionProps {
  image?: string;
  name: string;
}

interface typeTransaction {
  name: string;
  link: string;
}

interface TransactionProps {
  transactions: typeTransaction[];
}

interface PointProps {
  total: number;
}

const Section: React.FC<SectionProps> = ({ children, border = false }) => {
  return (
    <div
      className={`w-full flex gap-3 items-center p-5 ${
        border ? "border-b border-grey-200" : ""
      }`}
    >
      {children}
    </div>
  );
};

const ProfileSection: React.FC<ProfileSectionProps> = ({ image, name }) => {
  return (
    <Section border>
      {image ? (
        <Image src={image} width={26} height={26} alt="img-profile" />
      ) : (
        <UserCircleIcon width={40} color="#BDBDBD" />
      )}
      <p className="font-bold text-sm">{name}</p>
    </Section>
  );
};

const TransactionSection: React.FC<TransactionProps> = ({ transactions }) => {
  return (
    <Section border>
      <Accordion title="Transaksi">
        <ul className="list-none">
          {transactions.map((item, index) => (
            <li key={index} className="pt-1">
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </Accordion>
    </Section>
  );
};

const AccountSection: React.FC<TransactionProps> = ({ transactions }) => {
  return (
    <Section>
      <Accordion title="Account">
        <ul className="list-none">
          {transactions.map((item, index) => (
            <li key={index} className="pt-1">
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </Accordion>
    </Section>
  );
};

const PointSection: React.FC<PointProps> = ({ total }) => {
  return (
    <Section border>
      <div className="flex justify-between w-full items-center">
        <div className="flex gap-2 items-center">
          <div className="font-bold text-[#FFD588] text-md px-[10px] py-[3px] flex justify-center items-center rounded-full border-4 border-[#FFD588] bg-[#ff7e00]">
            P
          </div>
          <span className="text-md text-[#ff7e00]">F-Point</span>
        </div>
        {total}
      </div>
    </Section>
  );
};

export default SidebarDashboard;
