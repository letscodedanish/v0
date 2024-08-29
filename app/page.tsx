import Image from "next/image";
import { ui as Dashboard } from "@/components/component/ui";
import { Landing } from "@/components/component/landing";
import { Auth_Layout } from '../components/component/auth_pages/auth_layout';

export default function Home() {
  return (
    <div>

      <Auth_Layout />
      {/* <Landing/> */}
      {/*  <Dashboard/> */}
    </div>
  );
}
