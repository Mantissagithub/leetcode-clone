// Import hooks and components if needed
import React from "react";
import Link from "next/link";
import classNames from "classnames";
import Image from "next/image"; // Client-side only

interface Props {
  id: number;
  title: string;
  difficulty: string;
  tags?: string[];
  thumbnailUrl?: string;
  solutionCount?: number;
}

const ProblemCard: React.FC<Props> = ({
  id,
  title,
  difficulty,
  tags,
  thumbnailUrl,
  solutionCount,
}: Props) => {
  const classes = classNames("bg-white shadow rounded p-4", {
    "border border-gray-300": true,
  });

  return (
    <Link href="/problems/[id]" as={`/problems/${id}`}>
      <a className={classes}>
        <div className="relative w-full h-32 mb-2 overflow-hidden bg-gray-300">
          {thumbnailUrl && (
            <Image
              alt=""
              width={320}
              height={190}
              src={thumbnailUrl}
              objectFit="cover"
              quality={75}
              priority
            />
          )}
        </div>
        <h3 className="text-lg font-semibold text-gray-800 truncate leading-relaxed">
          {title}
        </h3>
        <span className="block mt-1 text-xs text-gray-600">{difficulty}</span>
        <ul className="mt-2 list-inside list-disc space-y-1 text-sm">
          {tags?.map((tag) => (
            <li key={tag} className="text-blue-600 hover:underline">
              #{tag}
            </li>
          ))}
        </ul>
        {solutionCount !== undefined ? (
          <span className="absolute bottom-0 left-0 right-0 m-2 block text-center text-xs italic text-gray-400">
            Solutions count: {solutionCount}
          </span>
        ) : null}
      </a>
    </Link>
  );
};

export default ProblemCard;