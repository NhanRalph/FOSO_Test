import React, { useState } from 'react';

// Định nghĩa các types
type FeedbackOption = 'thumbsUp' | 'heart' | 'star' | 'surprise' | 'thinking' | 'angry';

interface VotesState {
  thumbsUp: number;
  heart: number;
  star: number;
  surprise: number;
  thinking: number;
  angry: number;
}

interface FeedbackItem {
  id: FeedbackOption;
  emoji: string;
  label: string;
  count: number;
}

const FeedbackComponent: React.FC = () => {
  const [votes, setVotes] = useState<VotesState>({
    thumbsUp: 1,
    heart: 2,
    star: 0,
    surprise: 1,
    thinking: 0,
    angry: 0
  });

  const [selectedOption, setSelectedOption] = useState<FeedbackOption | null>(null);

  const handleVote = (option: FeedbackOption): void => {
    setSelectedOption(option);
    setVotes({
      ...votes,
      [option]: votes[option] + 1
    });
  };

  const feedbackOptions: FeedbackItem[] = [
    { id: 'thumbsUp', emoji: '👍', label: 'Hữu ích', count: votes.thumbsUp },
    { id: 'heart', emoji: '💚', label: 'Yêu thích', count: votes.heart },
    { id: 'star', emoji: '🤩', label: 'Thú vị', count: votes.star },
    { id: 'surprise', emoji: '😮', label: 'Bất ngờ', count: votes.surprise },
    { id: 'thinking', emoji: '🤔', label: 'Nhàm chán', count: votes.thinking },
    { id: 'angry', emoji: '😠', label: 'Tức giận', count: votes.angry }
  ];

  const countTotalVotes = Object.values(votes).reduce((acc, curr) => acc + curr, 0);

  return (
    <div className="w-full mx-auto p-6 bg-white dark:bg-[#00000050] rounded-3xl shadow-md mt-8">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-gray-700 dark:text-zinc-200">Bạn thấy bài viết như thế nào?</h2>
        <p className="text-gray-500 mt-1">{countTotalVotes} phản hồi</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {feedbackOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => handleVote(option.id)}
            className={`flex flex-col items-center p-4 rounded-lg  w-24 ${
              selectedOption === option.id ? 'border-2 border-green-500' : ''
            } hover:bg-gray-100 dark:hover:bg-[#ffffff15] transition-all`}
          >
            <div className="text-3xl mb-2">{option.emoji}</div>
            <div className="text-xl font-bold text-gray-700 text-gray-300">{option.count}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">{option.label}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FeedbackComponent;