export interface User {
    id: string;
    username: string;
    email: string;
    avatarUrl?: string;
    biography?: string;
    country?: string;
    city?: string;
    affiliateCompany?: string;
    occupation?: string;
    rank?: number;
    rating?: number;
    solvedProblemsCount?: number;
    participatedContestsCount?: number;
    contributedProblemsCount?: number;
    followersCount?: number;
    followingCount?: number;
    subscriptionExpirationDate?: Date;
  }