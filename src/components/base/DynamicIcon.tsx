import {
  Repeat,
  Wallet,
  PiggyBank,
  Landmark,
  BarChart3,
  Zap,
  HardDriveDownload,
  ShieldCheck,
  Palette,
  TrendingUp,
  TrendingDown,
  Tags,
  ArrowLeftRight,
  Coins,
  FileSpreadsheet,
  WifiOff,
  Blocks,
  Crown,
  XCircle,
  Target,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  repeat: Repeat,
  wallet: Wallet,
  piggy: PiggyBank,
  debts: Landmark,
  chart: BarChart3,
  zap: Zap,
  backup: HardDriveDownload,
  shield: ShieldCheck,
  palette: Palette,
  income: TrendingUp,
  expense: TrendingDown,
  tags: Tags,
  transfer: ArrowLeftRight,
  coins: Coins,
  export: FileSpreadsheet,
  offline: WifiOff,
  modular: Blocks,
  premium: Crown,
  no: XCircle,
  target: Target,
};

interface DynamicIconProps {
  name: string;
  className?: string;
}

export default function DynamicIcon({ name, className = "" }: DynamicIconProps) {
  const Icon = ICONS[name] ?? Zap;
  return <Icon className={className} />;
}