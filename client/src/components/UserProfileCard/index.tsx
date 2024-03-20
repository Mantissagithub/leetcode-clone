import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Avatar, Typography } from 'antd';
import dayjs from 'dayjs';
import { User } from '../../interfaces/auth';
import { InstagramOutlined, TwitterOutlined, GithubOutlined } from '@ant-design/icons';

interface UserProfileCardProps {
  user: User;
}

const UserProfileCard: React.FC<UserProfileCardProps> = (props) => {
  const { user } = props;
  const { nickname, email, pictureUrl, bio, joinDate, instagramLink, twitterLink, githubLink } = user;

  return (
    <div className="bg-white rounded shadow-lg overflow-hidden">
      <div className="relative">
        <Image
          alt=""
          className="object-cover object-center w-full h-48"
          width={1200}
          height={675}
          src={pictureUrl}
          layout="responsive"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <Avatar size={80} shape="circle" alt="avatar" src={pictureUrl} className="mb-4" />
          <Typography.Title level={3}>{nickname}</Typography.Title>
          <Typography.Paragraph className="text-gray-600">Joined {dayjs(joinDate).format('MMMM YYYY')}</Typography.Paragraph>
          <ul className="list-disc pl-4 text-gray-600 mt-4">
            <li>{bio}</li>
            {instagramLink && (
              <li className="flex items-center">
                <InstagramOutlined className="mr-1" />
                <a target="_blank" rel="noopener noreferrer" href={instagramLink}>
                  {email.split('@')[0]}
                </a>
              </li>
            )}
            {twitterLink && (
              <li className="flex items-center">
                <TwitterOutlined className="mr-1" />
                <a target="_blank" rel="noopener noreferrer" href={twitterLink}>
                  {email.split('@')[0]}
                </a>
              </li>
            )}
            {githubLink && (
              <li className="flex items-center">
                <GithubOutlined className="mr-1" />
                <a target="_blank" rel="noopener noreferrer" href={githubLink}>
                  {email.split('@')[0]}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;