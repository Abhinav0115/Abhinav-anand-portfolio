'use client';
import { FC, useState } from 'react';
import { IWorkExperienceData } from '../utils/Data';
import {
  Briefcase,
  Calendar,
  ChevronRight,
  Building,
  Award,
} from 'lucide-react';
import Image from 'next/image';

interface WorkExperienceProps {
  title: string;
  data: IWorkExperienceData[];
}

const WorkExperience: FC<WorkExperienceProps> = ({ title, data }) => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <>
      <section className="py-4 pb-0">
        <div className="container mx-auto px-4">
          <div className="text-3xl font-bold text-center text-highlight mb-4 mt-5 NameReveal">
            {title}
          </div>

          <div className="space-y-6">
            {data.map((experience) => (
              <div
                key={experience.id}
                className="bg-cardPrimary rounded-lg shadow-md overflow-hidden transition-all duration-300"
              >
                <div
                  className="p-6 cursor-pointer flex justify-between items-start"
                  onClick={() =>
                    experience.id !== undefined && toggleExpand(experience.id)
                  }
                >
                  <div className="flex-1">
                    <div className="flex items-center mb-1">
                      <Building className="w-5 h-5 text-gray-300 mr-2" />
                      {/* <div className="mr-2">
                        <Image
                          src={experience.companyLogo}
                          alt="Company Logo"
                          className='w-5 h-5'
                          width={30}
                          height={24}
                        />
                      </div> */}
                      <h3 className="text-xl font-semibold text-white">
                        {experience.companyName}
                      </h3>
                    </div>

                    <div className="ml-7">
                      <h3 className=" mb-1 text-lg font-medium text-green-400">
                        {experience.jobTitle} ({experience.role})
                      </h3>

                      <div className="flex items-center text-gray-100">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{experience.duration}</span>
                      </div>

                      <div className="mt-2.5 flex items-center gap-3 text-sm text-black">
                        <h3 className="rounded-md bg-green-100 p-2.5 pb-0.5 pt-0 ">
                          {experience.isFullTime
                            ? 'Full Time'
                            : experience.isInternship
                              ? 'Internship'
                              : 'Part Time'}
                        </h3>

                        {/*    <h3 className="rounded-md bg-green-100 p-2.5 pb-0.5 pt-0">
                          {!experience.isCurrent ? 'Current' : ''}
                        </h3>

                        <h3 className="rounded-md bg-green-100 p-2.5 pb-0.5 pt-0">
                          {experience.isRemote ? 'Remote' : 'In Office'}
                        </h3> */}

                      </div>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                      expandedId === experience.id ? 'transform rotate-90' : ''
                    }`}
                  />
                </div>

                {expandedId === experience.id && (
                  <div className="px-6 pb-6 border-t border-gray-100 pt-4">
                    <p className="text-white mb-4">{experience.description}</p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-green-400 uppercase tracking-wider mb-2">
                        Skills & Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.techStack.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-indigo-100 text-black rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center mb-2">
                        <Award className="w-4 h-4 text-green-400 mr-2" />
                        <h4 className="text-sm font-semibold text-green-400 uppercase tracking-wider">
                          Key Achievements
                        </h4>
                      </div>
                      <ul className="space-y-1 text-gray-200">
                        {experience.keyAchievement.map((achievement, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-indigo-500 mr-2">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkExperience;
