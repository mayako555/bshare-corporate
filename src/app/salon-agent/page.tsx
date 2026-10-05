import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function SalonAgentPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#f8fafc]">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-[10px] font-bold tracking-[0.3em] text-gray-400 mb-4 block uppercase">Our Product</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#2c3e50] tracking-wider mb-6">SALON AGENT</h1>
          <p className="text-lg text-gray-600 font-medium">美容サロン経営者のためのAI経営秘書</p>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-16 shadow-xl border border-gray-100 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -mr-20 -mt-20 opacity-60"></div>
          
          <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
            <div className="flex-1 w-full relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg relative bg-gray-50 border border-gray-200">
                <Image 
                  src="/images/business_1_new.jpg" 
                  alt="SALON AGENT ダッシュボード" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="flex-1 space-y-6">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2c3e50] leading-[1.5]">
                経営データを、次の一手に。
              </h2>
              <p className="text-sm text-gray-600 leading-[1.8]">
                忙しいサロンオーナーに代わって、売上や予約の変化を見つけて先に知らせるAI経営秘書「SALON AGENT」。
                <br /><br />
                予約サイト、POSレジ、紙のカルテなど、散らばったデータを自動で1つに集約し、AIが売上の傾向や失客リスクを分析・可視化します。数字の先にある「じゃあ、どうしたらいい？」という次の一手まで共に考える、新しい経営支援プラットフォームです。
              </p>
              
              <ul className="space-y-3 pt-4">
                {[
                  "データを自動で分析・可視化",
                  "AIが課題を先回りして提案",
                  "数字をもとに経営の意思決定をサポート"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-sm font-bold text-[#1e3a8a]">
                    <CheckCircle2 size={18} className="text-[#3b82f6] mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center bg-[#1e2733] text-white rounded-3xl p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-6">さらに詳しい機能や料金について</h3>
            <p className="text-sm text-gray-300 mb-10 max-w-xl mx-auto leading-[1.8]">
              機能の詳細、料金プラン、導入までの流れ、無料β版のお申し込みなどは、SALON AGENTの専用サービスサイトをご覧ください。
            </p>
            <Link
              href="https://salonagent.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-white text-[#1e2733] px-10 py-4 rounded-full text-sm font-sans tracking-widest font-bold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
            >
              <span>SALON AGENT サービスサイトへ</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
