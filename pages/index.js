// pages/index.js

import { useRouter } from 'next/router';
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";

export default function Home() {
  const address = useAddress();
  const router = useRouter();

  // If address is present, navigate to the form page
  if (address) {
    router.push('/Form');
    return null; // Returning null to prevent rendering anything on this page
  }

  return (
    <div className="h-screen flex justify-center items-center mx-auto">
      <div className="bg-blue-500 px-4 py-4 rounded-lg hover:bg-blue-400 text-blue transition-all">
        <ConnectWallet />
      </div>
    </div>
  );
}
