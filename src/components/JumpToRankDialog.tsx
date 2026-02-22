"use client";

import { useRef, useEffect, useState } from "react";

interface JumpToRankDialogProps {
  itemName: string;
  currentRank: number;
  totalItems: number;
  onConfirm: (newRank: number) => void;
  onClose: () => void;
}

export function JumpToRankDialog({
  itemName,
  currentRank,
  totalItems,
  onConfirm,
  onClose,
}: JumpToRankDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState(String(currentRank));

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) {
      dialog.showModal();
    }
    // Small delay to let dialog render before focusing
    setTimeout(() => {
      inputRef.current?.select();
    }, 50);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const num = parseInt(value, 10);
    if (isNaN(num) || num < 1 || num > totalItems) return;
    if (num === currentRank) {
      onClose();
      return;
    }
    onConfirm(num);
  };

  const handleCancel = () => {
    dialogRef.current?.close();
    onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      className="rounded-xl p-0 shadow-2xl max-w-sm w-full"
      style={{
        backgroundColor: "var(--theme-surface)",
        color: "var(--theme-text-body)",
        border: "1px solid var(--theme-surface-border)",
      }}
    >
      <form onSubmit={handleSubmit} className="p-6">
        <h3 className="text-lg font-semibold mb-1">Jump to Rank</h3>
        <p className="text-sm opacity-70 mb-4">
          <span className="font-medium">{itemName}</span> is currently ranked
          #{currentRank}
        </p>
        <label className="block text-sm font-medium mb-2">
          New rank (1–{totalItems}):
        </label>
        <input
          ref={inputRef}
          type="number"
          min={1}
          max={totalItems}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full px-3 py-2 rounded-lg text-base font-mono border outline-none focus:ring-2"
          style={{
            backgroundColor: "var(--theme-surface)",
            borderColor: "var(--theme-surface-border)",
            color: "var(--theme-text-body)",
            // @ts-expect-error CSS custom property in ring color
            "--tw-ring-color": "var(--theme-primary)",
          }}
        />
        <div className="flex gap-2 mt-4 justify-end">
          <button
            type="button"
            onClick={handleCancel}
            className="px-4 py-2 rounded-lg text-sm font-medium cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded-lg text-sm font-medium cursor-pointer transition-opacity hover:opacity-90"
            style={{
              backgroundColor: "var(--theme-primary)",
              color: "var(--theme-text-on-primary)",
            }}
          >
            Move
          </button>
        </div>
      </form>
    </dialog>
  );
}
