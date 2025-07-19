import { useLanguage } from '@/hooks/use-language';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <Select value={language} onValueChange={setLanguage}>
      <SelectTrigger className="w-24 bg-gray-100 border-none text-sm font-medium">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="gu">ગુજરાતી</SelectItem>
      </SelectContent>
    </Select>
  );
}
