import { MessageCircle, Calendar, Plane, CheckCircle, UserCheck } from 'lucide-react';
import { Instructor, Plan, FaqItem, Feature, ScheduleItem, Step } from './types';

export const LINE_URL = "https://line.me/R/ti/p/@example";

export const INSTRUCTORS: Instructor[] = [
  {
    id: 1,
    name: "Maria",
    age: 25,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    background: "セブ大学英語教育学部卒 / 講師歴3年",
    hobbies: "カフェ巡り、ヨガ、日本文化",
    specialty: "ビジネス英語、発音矯正",
    personality: "明るく優しい性格",
    message: "リラックスして、楽しく英語を話しましょう！",
  },
  {
    id: 3,
    name: "Angel",
    age: 23,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    background: "英文学専攻 / エネルギッシュ",
    hobbies: "音楽、ダンス、写真、ビーチ",
    specialty: "カジュアル英会話、スラング",
    personality: "元気で楽しい",
    message: "英語を話すのが楽しくなりますよ！",
  },
  {
    id: 4,
    name: "Christine",
    age: 26,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    background: "心理学部卒 / コミュニケーションのプロ",
    hobbies: "アート、カフェ巡り、映画鑑賞",
    specialty: "初心者向け、日常会話",
    personality: "聞き上手で丁寧",
    message: "一緒に素敵な時間を過ごしながら学びましょう！",
  },
];

export const FEATURES: Feature[] = [
  {
    title: "カフェ・レストランでの実践英会話",
    description: "教室の閉鎖的な空間ではなく、おしゃれなカフェやレストランで、生きた英語を学びます。",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "女性講師とのマンツーマン",
    description: "厳選されたフィリピン人女性講師とデート感覚で。自然と会話が弾み、英語力が向上します。",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "セブ島の魅力的な環境",
    description: "美しいビーチと南国の開放的な空気の中で、リラックスして学習に集中できます。",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80"
  }
];

export const SCHEDULE: ScheduleItem[] = [
  {
    time: "09:00-11:00",
    title: "カフェレッスン",
    description: "お気に入りのカフェで、コーヒーを飲みリラックスして英会話。",
    image: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=600&q=80"
  },
  {
    time: "12:00-14:00",
    title: "ランチ＆フリー",
    description: "現地のレストランで講師とランチ（オプション）。",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80"
  },
  {
    time: "14:00-17:00",
    title: "自由時間",
    description: "ビーチでリラックス、観光、ショッピングなど自由に過ごせます。",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
  },
  {
    time: "18:00-19:00",
    title: "実践ディナー英会話",
    description: "ディナータイムにレストランで実践的な会話レッスン。",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80"
  }
];

export const PLANS: Plan[] = [
  {
    title: "1週間プラン",
    price: "¥198,000",
    features: ["マンツーマンレッスン 20時間", "滞在先手配", "空港送迎", "現地サポート"],
    isPopular: false
  },
  {
    title: "2週間プラン",
    price: "¥348,000",
    features: ["マンツーマンレッスン 40時間", "滞在先手配", "空港送迎", "現地サポート", "週末アクティビティ"],
    isPopular: true
  },
  {
    title: "1ヶ月プラン",
    price: "¥598,000",
    features: ["マンツーマンレッスン 80時間", "滞在先手配", "空港送迎", "現地サポート", "週末アクティビティ×4", "ビザサポート"],
    isPopular: false
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "英語初心者でも大丈夫ですか？",
    answer: "はい、全く問題ありません。講師は初心者の指導経験も豊富で、ゆっくり丁寧に話してくれます。言葉に詰まっても笑顔でサポートしてくれるので安心です。"
  },
  {
    question: "宿泊先はどうなりますか？",
    answer: "提携している安全で快適なホテルまたはコンドミニアムをご用意しております。ご自身で手配されたい場合は、宿泊費抜きのプランも可能です。"
  },
  {
    question: "講師は指名できますか？",
    answer: "事前のヒアリングでお好みのタイプや学習目的を伺い、最適な講師をマッチングしますが、スケジュールの空き状況によりご希望に添えない場合もございます。"
  },
  {
    question: "治安は大丈夫ですか？",
    answer: "レッスンを行うエリアはセブ市内でも治安の良いITパークやリゾートエリア周辺のカフェ・レストランを厳選しています。"
  },
  {
    question: "1日の予定は変更できますか？",
    answer: "マンツーマンですので、ある程度の柔軟性はあります。前日までにご相談いただければ調整可能です。"
  }
];

export const STEPS: Step[] = [
  { number: 1, title: "LINE友だち追加", description: "まずは気軽に友だち追加", icon: MessageCircle },
  { number: 2, title: "無料相談", description: "希望プランや不安を相談", icon: UserCheck },
  { number: 3, title: "プラン決定", description: "最適なプランをご提案", icon: CheckCircle },
  { number: 4, title: "渡航準備", description: "航空券・ビザなどサポート", icon: Plane },
  { number: 5, title: "セブ留学開始", description: "空港でお出迎えします", icon: Calendar },
];