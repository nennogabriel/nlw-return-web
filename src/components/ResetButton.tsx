import { ArrowLeft } from 'phosphor-react';

interface ResetButtonProps {
  onFeedbackRestartRequested: () => void;
}

export function ResetButton({ onFeedbackRestartRequested }: ResetButtonProps) {
  return (
    <button
      className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
      title="Voltar"
      onClick={onFeedbackRestartRequested}
    >
      <ArrowLeft weight="bold" className="h-4 w-4" />
    </button>
  );
}
