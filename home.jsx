import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

const Home = () => {
  const [username, setUsername] = useState("");
  const [refCode, setRefCode] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [dailyBonus, setDailyBonus] = useState(0);
  const [bonusClaimed, setBonusClaimed] = useState(false);

  useEffect(() => {
    const claimedToday = localStorage.getItem("lusha_bonus_claimed");
    if (claimedToday === new Date().toDateString()) {
      setBonusClaimed(true);
    }
  }, []);

  const handleLogin = () => {
    if (username.trim() !== "") {
      setLoggedIn(true);
    }
  };

  const claimBonus = () => {
    if (!bonusClaimed) {
      setDailyBonus(10);
      setBonusClaimed(true);
      localStorage.setItem("lusha_bonus_claimed", new Date().toDateString());
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-white flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        {!loggedIn ? (
          <Card className="rounded-2xl shadow-md p-6">
            <CardContent>
              <h1 className="text-2xl font-bold text-center mb-4">Welcome to Lusha</h1>
              <Input
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mb-2"
              />
              <Input
                placeholder="Referral code (optional)"
                value={refCode}
                onChange={(e) => setRefCode(e.target.value)}
                className="mb-4"
              />
              <Button className="w-full" onClick={handleLogin}>
                Enter
              </Button>
            </CardContent>
          </Card>
        ) : (
          <Card className="rounded-2xl shadow-md p-6">
            <CardContent className="text-center">
              <h2 className="text-xl font-semibold mb-2">Hello, {username} 👋</h2>
              <p className="text-green-700 mb-4">
                {bonusClaimed
                  ? `You have already claimed today's bonus: Ksh ${dailyBonus}`
                  : "Claim your daily bonus now!"}
              </p>
              <Button disabled={bonusClaimed} onClick={claimBonus} className="mb-4">
                Claim Daily Bonus
              </Button>
              <p className="text-sm text-gray-500">
                Invite your friends using your referral code: <strong>{username}</strong>
              </p>
            </CardContent>
          </Card>
        )}
      </motion.div>
    </div>
  );
};

export default Home;
