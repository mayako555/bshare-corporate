import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CompanyPage() {
  return (
    <div className="pt-24 pb-24 min-h-screen bg-[#f8fafc]">
      
      {/* Hero Header */}
      <div className="relative w-full h-[300px] md:h-[400px] bg-[#e8eef2] flex items-center justify-center overflow-hidden mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-pink-50 opacity-50" />
        <div className="absolute top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/40 blur-3xl rounded-full" />
        <div className="relative z-10 text-center">
          <span className="text-[10px] font-sans tracking-[0.4em] text-gray-500 mb-4 block uppercase font-bold">COMPANY</span>
          <h1 className="text-3xl md:text-5xl font-serif text-[#2c3e50] tracking-wider drop-shadow-sm">会社概要</h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12">
        
        {/* Philosophy */}
        <section className="mb-24 text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-[#2c3e50] mb-8 leading-[1.6]">
            美容の現場とテクノロジーで、<br />
            もっと自由で豊かな未来を。
          </h2>
          <p className="text-[13px] text-gray-600 leading-[2.2] max-w-2xl mx-auto">
            私たちは、ただのIT企業でも、ただの美容会社でもありません。<br />
            現場のリアルな課題を知り尽くしているからこそ作れるテクノロジーがあります。<br />
            サロンで働くスタッフ、経営者、そしてお客様。<br />
            美容に関わるすべての人々が、より輝ける「Beauty Tech」の未来を創造します。
          </p>
        </section>

        {/* Company Profile Table */}
        <div className="bg-white p-8 md:p-16 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100">
          <h3 className="text-xl font-serif text-[#2c3e50] mb-10 border-b border-gray-100 pb-4">会社情報</h3>
          <dl className="divide-y divide-gray-100">
            {[
              { label: "会社名", value: "美share株式会社 (Bshare Inc.)" },
              { label: "代表取締役", value: "岡田 万耶子" },
              { label: "設立", value: "2021年X月X日" },
              { label: "事業内容", value: (
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>美容サロン向け経営支援クラウド「SALON AGENT」の開発・運営</li>
                  <li>美容サロン・個人事業主向けWebサイト制作・マーケティング支援</li>
                  <li>アイラッシュ・アイブロウサロンの運営</li>
                  <li>美容技術・サロン経営に関する教育・スクール事業</li>
                  <li>アイデザイナー専用動画配信サービス「Bshare」の運営</li>
                </ul>
              )},
              { label: "所在地", value: "〒650-0000 兵庫県神戸市..." },
              { label: "主要取引先", value: "（記載があれば追加）" },
            ].map((item, idx) => (
              <div key={idx} className="py-6 flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                <dt className="text-xs font-bold tracking-widest text-gray-400 md:w-1/4 shrink-0 mt-1">{item.label}</dt>
                <dd className="text-sm font-medium text-gray-800 leading-[1.8]">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

      </div>
    </div>
  );
}
