import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"

import React, { useState } from 'react';
import { X } from 'lucide-react';

// Sample staff data - replace with your actual data from Sanity
const staffData = {
  eboard: [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Editor-in-Chief",
      photo: "https://images.unsplash.com/photo-1494790108755-2616b9a4e4f0?w=300&h=300&fit=crop&crop=face",
      bio: "Sarah is a senior studying journalism and creative writing. She's been with The Bunion since freshman year and has a particular talent for writing satirical pieces about campus dining. When she's not editing articles, you can find her complaining about the Green Line."
    },
    {
      id: 2,
      name: "Mike Chen",
      position: "Managing Editor",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Mike is a junior in COM who joined The Bunion after his freshman year roommate convinced him that satire was his calling. He specializes in sports satire and has never missed a BU hockey game, despite not understanding hockey."
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      position: "Creative Director",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Emma is a senior art student who designs all of The Bunion's graphics and manages the visual content. She's responsible for making our ridiculous headlines look professional and our professional headlines look ridiculous."
    },
    {
      id: 4,
      name: "David Park",
      position: "Web Editor",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "David is a CS major who somehow ended up writing for a satire publication. He maintains our website and writes tech-related satirical pieces. He once wrote an article about BU's WiFi that went viral."
    },
    {
      id: 5,
      name: "Jessica Wong",
      position: "Social Media Manager",
      photo: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=300&h=300&fit=crop&crop=face",
      bio: "Jessica runs The Bunion's social media accounts and somehow makes our terrible jokes even funnier in 280 characters or less. She's a marketing major who claims this is 'practical experience.'"
    },
    {
      id: 6,
      name: "Alex Thompson",
      position: "Business Manager",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      bio: "Alex handles the business side of The Bunion, which mainly involves explaining to sponsors that we're satirical. He's an economics major with a minor in creative writing and a major in anxiety."
    }
  ],
  staff: [
    {
      id: 7,
      name: "Rachel Green",
      position: "Staff Writer",
      photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face",
      bio: "Rachel is a sophomore who writes primarily about campus life. Her article about the BU Beach got more engagement than any real news story that week."
    },
    {
      id: 8,
      name: "Tom Wilson",
      position: "Staff Writer",
      photo: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=300&h=300&fit=crop&crop=face",
      bio: "Tom covers local Boston news with a satirical twist. He once interviewed a pigeon in Boston Common and wrote a 500-word piece about it."
    },
    {
      id: 9,
      name: "Lisa Kumar",
      position: "Staff Writer",
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
      bio: "Lisa specializes in academic satire and has perfected the art of making fun of every BU school equally. She's a pre-med student who uses humor as therapy."
    },
    {
      id: 10,
      name: "Chris Martinez",
      position: "Staff Writer",
      photo: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=300&h=300&fit=crop&crop=face",
      bio: "Chris covers sports for The Bunion and somehow makes losing streaks funny. He's also our resident expert on Agganis Arena concession stand prices."
    },
    {
      id: 11,
      name: "Amanda Foster",
      position: "Copy Editor",
      photo: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face",
      bio: "Amanda makes sure our jokes are grammatically correct. She's an English major who finds typos funnier than most of our actual content."
    },
    {
      id: 12,
      name: "Ryan O'Connor",
      position: "Staff Writer",
      photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=300&h=300&fit=crop&crop=face",
      bio: "Ryan writes about dining and campus food with the passion of a food critic and the budget of a college student. His Ramen Reviews series is surprisingly popular."
    },
    {
      id: 13,
      name: "Nicole Lee",
      position: "Staff Writer",
      photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&h=300&fit=crop&crop=face",
      bio: "Nicole covers campus events and activities. She once live-tweeted a entire student government meeting and turned it into a comedy goldmine."
    },
    {
      id: 14,
      name: "Jake Robinson",
      position: "Photographer",
      photo: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=300&h=300&fit=crop&crop=face",
      bio: "Jake takes photos for The Bunion and has mastered the art of making mundane campus locations look dramatic. His photo series 'Brutalist BU' went viral on Instagram."
    }
  ]
};

type StaffMemberType = {
  id: number;
  name: string;
  position: string;
  photo: string;
  bio: string;
};

type StaffMemberProps = {
  member: StaffMemberType;
  onClick: (member: StaffMemberType) => void;
};

const StaffMember: React.FC<StaffMemberProps> = ({ member, onClick }) => {
  return (
    <div 
      className="text-center cursor-pointer group transition-transform hover:scale-105"
      onClick={() => onClick(member)}
    >
      <div className="relative mb-3">
        <img
          src={member.photo}
          alt={member.name}
          className="w-full aspect-square object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all rounded-lg"></div>
      </div>
      <h3 className="font-bold text-sm group-hover:text-red-600 transition-colors">
        {member.name}
      </h3>
      <p className="text-xs text-gray-600 mt-1">{member.position}</p>
    </div>
  );
};

type ModalProps = {
  member: StaffMemberType | null;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ member, onClose }) => {
  if (!member) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900">{member.name}</h2>
              <p className="text-red-600 font-medium">{member.position}</p>
            </div>
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="mb-4">
            <img
              src={member.photo}
              alt={member.name}
              className="w-32 h-32 object-cover rounded-lg mx-auto"
            />
          </div>
          
          <div className="text-gray-700 leading-relaxed">
            <p>{member.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutUsPage = () => {
  const [selectedMember, setSelectedMember] = useState<StaffMemberType | null>(null);

  const openModal = (member: StaffMemberType) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b-2 border-black">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <h1 className="text-4xl font-bold font-serif">THE BUNION</h1>
            <div className="text-sm text-gray-600">
              Boston University's Satirical News Source
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-center mb-2">Fall 2025 Staff</h1>
        </div>

        {/* E-board Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-black">E-board</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {staffData.eboard.map((member) => (
              <StaffMember
                key={member.id}
                member={member}
                onClick={openModal}
              />
            ))}
          </div>
        </section>

        {/* Staff Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-black">Staff</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {staffData.staff.map((member) => (
              <StaffMember
                key={member.id}
                member={member}
                onClick={openModal}
              />
            ))}
          </div>
        </section>

        {/* Retirees Section */}
        <section className="mb-12">
          <p className="text-center text-gray-600 italic mb-8">
            We miss you deeply… Pay your visits to our <a href="/contributors" className="text-red-600 hover:underline">RETIREES</a>
          </p>
        </section>

        {/* About Section */}
        <section className="max-w-4xl mx-auto text-sm text-gray-700 leading-relaxed space-y-4">
          <p>
            The Bunion is a satire news publication for the Boston University community created by Kevin Flynn on September 6th, 2012. The Bunion is meant for entertainment purposes only. All sources and quotes are fabricated. The use of the names or likenesses of notable Boston University figures or students is entirely fictional and for satirical purposes. Any resemblance to actual events is coincidental.
          </p>
          <p>
            The Bunion is a registered student organization at Boston University under the Deerfield Road. The Bunion does not receive any funding from the university, and any content published by The Bunion is not representative of the views of the university.
          </p>
          
          <div className="pt-8 border-t border-gray-300">
            <p className="mb-4">
              <a href="/contributors" className="text-red-600 hover:underline">
                See the full list of people who have contributed to The Bunion here.
              </a>
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold mb-2">Special Thanks To</h3>
                <ul className="space-y-1 text-xs">
                  <li>Quinn Boyes (COM '13)</li>
                  <li>Martin Nolan (COM '13)</li>
                  <li>Jason Weitzman (COM '13)</li>
                  <li>Kevin Flynn (CAS '14)</li>
                  <li>Ian Blau (COM '15)</li>
                  <li>Jasper Craven (COM '15)</li>
                  <li>Marc Finn (COM '16)</li>
                  <li>Grace Condon (COM '18)</li>
                  <li>Karli Marulli (COM '19)</li>
                  <li>Ethan Brown (CAS/COM '21)</li>
                  <li>Timothy Choi (COM '21)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold mb-2">Web Design By</h3>
                <ul className="space-y-1 text-xs mb-4">
                  <li>Ethan Brown (COM/CAS '21)</li>
                  <li>Julia Ralenkotter (COM '24)</li>
                  <li>Randy Erwin (CAS '25)</li>
                  <li>Doran Steinfeld (COM '27)</li>
                </ul>
                
                <h3 className="font-bold mb-2">Created By</h3>
                <p className="text-xs">Kevin Flynn (CAS '14)</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Modal */}
      {selectedMember && (
        <Modal member={selectedMember} onClose={closeModal} />
      )}
    </div>
  );
};

export default AboutUsPage;