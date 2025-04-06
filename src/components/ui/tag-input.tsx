import * as React from "react";
import { X } from "lucide-react";
import { Badge } from "./badge";
import { Input } from "./input";

interface TagInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
  placeholder?: string;
  tags: string[];
  onTagsChange: (tags: string[]) => void;
  maxTags?: number;
}

const TagInput = React.forwardRef<HTMLInputElement, TagInputProps>(
  ({ placeholder = "Add tag...", tags, onTagsChange, maxTags = 10, className, ...props }, ref) => {
    const [inputValue, setInputValue] = React.useState("");

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' || e.key === ',') {
        e.preventDefault();
        const newTag = inputValue.trim();
        if (newTag && !tags.includes(newTag) && tags.length < maxTags) {
          onTagsChange([...tags, newTag]);
          setInputValue("");
        }
      } else if (e.key === 'Backspace' && !inputValue && tags.length > 0) {
        onTagsChange(tags.slice(0, -1));
      }
    };

    const removeTag = (tagToRemove: string) => {
      onTagsChange(tags.filter(tag => tag !== tagToRemove));
    };

    return (
      <div className="flex flex-wrap gap-2 p-2 border rounded-md bg-background">
        {tags.map((tag) => (
          <Badge 
            key={tag} 
            variant="secondary"
            className="hover:bg-secondary/80 transition-colors"
          >
            {tag}
            <button
              type="button"
              className="ml-1 hover:text-destructive"
              onClick={() => removeTag(tag)}
            >
              <X className="h-3 w-3" />
            </button>
          </Badge>
        ))}
        <Input
          ref={ref}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={tags.length < maxTags ? placeholder : `Maximum ${maxTags} tags`}
          className="flex-1 border-0 focus-visible:ring-0 p-0 placeholder:text-muted-foreground text-sm"
          disabled={tags.length >= maxTags}
          {...props}
        />
      </div>
    );
  }
);

TagInput.displayName = "TagInput";

export { TagInput };
