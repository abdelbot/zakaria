import { motion, AnimatePresence } from "motion/react";
import { 
  User, 
  BookOpen, 
  Briefcase, 
  Globe, 
  Flag, 
  Search, 
  CheckCircle2, 
  MapPin, 
  GraduationCap,
  Scale,
  Award,
  ChevronLeft
} from "lucide-react";
import { useState } from "react";
import profileImage from "./assets/id.jpeg";
import flnLogo from "./assets/fln.png";

const cvData = {
  personalInfo: {
    name: "سحنون زكرياء عبد المجيد",
    title: "باحث قانوني | إطار إداري | مناضل سياسي",
    nationality: "جزائري",
    politicalAffiliation: "حزب جبهة التحرير الوطني",
    currentPosition: "مفتش قسم – مصالح أملاك الدولة",
    academicLevel: "دكتور",
    image: profileImage // Profile picture
  },
  summary: "إطار إداري وباحث أكاديمي متخصص في القانون الدولي الاقتصادي، يجمع بين تكوين قانوني أكاديمي رفيع المستوى وخبرة ميدانية معمّقة في تسيير ومراقبة العقار العمومي وإطار الاستثمار. يُعدّ من المناضلين المنخرطين في العمل السياسي والمدني تحت لواء حزب جبهة التحرير الوطني، مع حضور فاعل في الهيئات الاستشارية الوطنية ومنظمات المجتمع المدني. يرى في الترشح فرصة لتعزيز دور المؤسسات في خدمة التنمية المستدامة وتجسيد قيم المشاركة الديمقراطية.",
  sections: [
    {
      id: "academic",
      title: "المسار الأكاديمي",
      icon: <GraduationCap className="w-5 h-5" />,
      items: [
        { title: "ليسانس في الحقوق", date: "2012" },
        { title: "ماجستير في القانون الدولي الإنساني", date: "2016" },
        { title: "دكتوراه علوم (قيد الإنجاز)", date: "منذ 2016", subtitle: "تخصص: القانون الدولي الاقتصادي" },
      ],
      thesis: {
        title: "الإطار القانوني للشراكة الاقتصادية في ظل القانون الدولي والقوانين الوطنية – الجزائر ومصر نموذجاً",
        note: "تعديل موضوع الأطروحة مثبت بمحضر المجلس العلمي بتاريخ 25/02/2024"
      }
    },
    {
      id: "professional",
      title: "الخبرة المهنية",
      icon: <Briefcase className="w-5 h-5" />,
      items: [
        {
          role: "مفتش قسم بمصالح أملاك الدولة",
          location: "قطاع المالية – الجزائر",
          tasks: [
            "تسيير ومراقبة العقار العمومي",
            "الإشراف على الإطار القانوني للاستثمار",
            "المتابعة الإدارية للمشاريع",
            "تطبيق الأطر التشريعية المنظمة لأملاك الدولة"
          ]
        },
        {
          role: "خبرة ميدانية سابقة في القطاع الخاص",
          period: "خلال فترة الماجستير",
          tasks: [
            "تمثيل شركات ناشطة في مجالات الاستثمار والصناعة والأشغال العمومية",
            "اكتساب معرفة ميدانية بآليات الاستثمار وأساليب إدارة المشاريع",
            "التعامل مع المنظومة القانونية الاقتصادية من الداخل التطبيقي"
          ]
        }
      ]
    },
    {
      id: "academic-coord",
      title: "الخبرة الأكاديمية والتنسيقية",
      icon: <Globe className="w-5 h-5" />,
      items: [
        {
          role: "منسق الجالية الجزائرية في الجامعات المصرية",
          period: "2013 – إلى اليوم",
          details: [
            "مرافقة الطلبة والباحثين الجزائريين في إطار تطوعي",
            "التنسيق الأكاديمي والتوجيهي بين المؤسسات الجامعية",
            "بناء شبكة علاقات أكاديمية مع جامعات وأساتذة دوليين",
            "الإسهام في تعزيز صورة الجزائر في الأوساط الأكاديمية الخارجية"
          ]
        }
      ]
    },
    {
      id: "political",
      title: "المسار النضالي والمؤسساتي",
      icon: <Flag className="w-5 h-5" />,
      points: [
        "مناضل في صفوف حزب جبهة التحرير الوطني",
        "مكلف بالشباب لدائرة مهدية على مستوى محافظة قصر الشلالة | 2018",
        "مكلف بالإعلام على مستوى محافظة الحزب بتيارت | 2021",
        "مترشح سابق في استحقاقات سياسية",
        "ناشط في إطار التشاركية الديمقراطية وتعزيز الوعي المجتمعي"
      ],
      councils: [
        "المجلس الأعلى للشباب",
        "المرصد الوطني للمجتمع المدني",
        "وسيط الجمهورية"
      ],
      footer: "العمل على دعم التنمية المحلية وتعزيز مشاركة الشباب في الشأن العام"
    },
    {
      id: "interests",
      title: "مجالات الاهتمام والبحث العلمي",
      icon: <Search className="w-5 h-5" />,
      tags: [
        "الشراكة الاقتصادية الدولية",
        "القانون الدولي الاقتصادي",
        "الحوكمة والتنمية المستدامة",
        "الإطار القانوني للاستثمار"
      ]
    }
  ],
  declaration: "أتعهد بصدق أن المعلومات الواردة في هذه السيرة الذاتية صحيحة ودقيقة، وأن وثائق الملف المرفقة مطابقة للأصل. كما أتعهد، في حال قبول ترشحي ضمن القائمة النهائية للحزب، بتفويض الحزب وكالة لتقديم جميع الوثائق الإدارية للمصادقة عليها لدى السلطة الوطنية المستقلة للانتخابات.",
  date: "15/04/2026"
};

export default function App() {
  const [activeTab, setActiveTab] = useState(cvData.sections[0].id);

  return (
    <div className="min-h-screen pb-20 overflow-x-hidden selection:bg-emerald-100 selection:text-emerald-900" dir="rtl">
      {/* Header / Hero Section */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative pt-12 pb-24 text-white bg-secondary overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="container px-4 mx-auto max-w-5xl relative">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="w-40 h-40 rounded-3xl border-4 border-emerald-400 overflow-hidden shadow-2xl bg-white/10 backdrop-blur-sm">
                <img 
                  src={cvData.personalInfo.image} 
                  alt={cvData.personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-2 -right-2 bg-emerald-500 text-white p-2 rounded-xl shadow-lg border-2 border-secondary"
              >
                <CheckCircle2 className="w-5 h-5" />
              </motion.div>
            </motion.div>

            <div className="text-center md:text-right flex-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider uppercase bg-emerald-500/20 text-emerald-300 rounded-full border border-emerald-500/30">
                  {cvData.personalInfo.academicLevel}
                </span>
                <h1 className="text-4xl md:text-5xl font-black mb-2 tracking-tight">
                  {cvData.personalInfo.name}
                </h1>
                <p className="text-emerald-100 text-lg md:text-xl font-medium opacity-90 leading-relaxed max-w-2xl">
                  {cvData.personalInfo.title}
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-6 flex flex-wrap justify-center md:justify-start gap-4"
              >
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10 text-sm">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span>الجزائر</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10 text-sm">
                  <Flag className="w-4 h-4 text-emerald-400" />
                  <span>{cvData.personalInfo.politicalAffiliation}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10 text-sm">
                  <Briefcase className="w-4 h-4 text-emerald-400" />
                  <span>{cvData.personalInfo.currentPosition}</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Summary Box */}
      <div className="container px-4 mx-auto max-w-5xl -mt-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-slate-100"
        >
          <div className="flex items-start gap-6">
            <div className="hidden sm:flex shrink-0 w-12 h-12 rounded-2xl bg-emerald-50 items-center justify-center text-emerald-600">
              <User className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-secondary">ملخص المترشح</h2>
              <p className="text-slate-600 leading-bold text-lg leading-[1.8] text-justify">
                {cvData.summary}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Main Content Areas */}
      <main className="container px-4 mx-auto max-w-5xl mt-16 pt-2">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Navigation Sidebar */}
          <aside className="lg:col-span-4 h-fit sticky top-8">
            <div className="space-y-2">
              {cvData.sections.map((section, idx) => (
                <button
                  key={section.id}
                  onClick={() => setActiveTab(section.id)}
                  className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-300 ${
                    activeTab === section.id 
                    ? "bg-secondary text-white shadow-lg shadow-emerald-900/20 translate-x-2" 
                    : "bg-white text-slate-500 hover:bg-slate-50 border border-slate-100"
                  }`}
                >
                  <span className={`${activeTab === section.id ? "text-emerald-400" : "text-slate-400"}`}>
                    {section.icon}
                  </span>
                  <span className="font-bold text-base whitespace-nowrap">{section.title}</span>
                </button>
              ))}
            </div>

            
          </aside>

          {/* Content Panel */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {cvData.sections.map((section) => section.id === activeTab && (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-1.5 h-10 bg-emerald-500 rounded-full"></div>
                    <h2 className="text-3xl font-black text-secondary tracking-tight">
                      {section.title}
                    </h2>
                  </div>

                  {/* Rendering logic based on section type */}
                  {section.items && (
                    <div className="space-y-6">
                      {section.items.map((item: any, i) => (
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1 }}
                          key={i} 
                          className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
                        >
                          {/* Item header */}
                          <div className="flex justify-between items-start mb-6 gap-4">
                            <div>
                              <h3 className="text-xl font-bold text-slate-800 group-hover:text-emerald-600 transition-colors">
                                {item.role || item.title}
                              </h3>
                              {item.location && <p className="text-emerald-600 font-medium text-sm mt-1">{item.location}</p>}
                              {item.subtitle && <p className="text-slate-500 text-sm mt-1">{item.subtitle}</p>}
                            </div>
                            {(item.date || item.period) && (
                              <span className="shrink-0 px-4 py-1.5 bg-slate-50 text-slate-500 text-xs font-bold rounded-xl border border-slate-100">
                                {item.date || item.period}
                              </span>
                            )}
                          </div>

                          {/* List of points / tasks */}
                          {(item.tasks || item.details) && (
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {(item.tasks || item.details).map((task: string, ti: number) => (
                                <li key={ti} className="flex items-start gap-3">
                                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></div>
                                  <span className="text-slate-600 text-[0.95rem] leading-relaxed">{task}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </motion.div>
                      ))}

                      {/* Thesis special case */}
                      {section.thesis && (
                        <div className="p-8 rounded-3xl border-2 border-emerald-100 bg-emerald-50/30">
                          <h4 className="text-emerald-700 font-bold mb-3 flex items-center gap-2">
                            <BookOpen className="w-5 h-5" />
                            <span>عنوان أطروحة الدكتوراه:</span>
                          </h4>
                          <p className="text-slate-700 text-lg italic mb-4 leading-relaxed font-medium">
                            "{section.thesis.title}"
                          </p>
                          <div className="flex items-start gap-2 text-slate-500 text-xs">
                            <div className="mt-1 w-1 h-1 rounded-full bg-slate-400 shrink-0"></div>
                            <p>{section.thesis.note}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {section.points && (
                    <div className="space-y-4">
                      {section.points.map((point, pi) => (
                        <motion.div 
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: pi * 0.05 }}
                          key={pi} 
                          className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm"
                        >
                          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                          <span className="text-slate-700 font-medium">{point}</span>
                        </motion.div>
                      ))}

                      {section.councils && (
                        <div className="mt-10">
                          <h4 className="text-lg font-bold text-slate-800 mb-4 px-2">مساهم في الهيئات الاستشارية الوطنية:</h4>
                          <div className="flex flex-wrap gap-4">
                            {section.councils.map((council, ci) => (
                              <div key={ci} className="bg-emerald-600 text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-emerald-900/10 flex items-center gap-3">
                                <Award className="w-5 h-5 opacity-80" />
                                <span>{council}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {section.footer && (
                        <div className="mt-8 p-6 bg-white border border-slate-100 rounded-3xl text-center">
                          <p className="text-slate-600 font-semibold">{section.footer}</p>
                        </div>
                      )}
                    </div>
                  )}

                  {section.tags && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {section.tags.map((tag, ti) => (
                        <motion.div 
                          whileHover={{ scale: 1.03 }}
                          key={ti} 
                          className="p-8 bg-white border border-slate-100 rounded-[2rem] flex flex-col items-center justify-center text-center group transition-all cursor-default shadow-sm hover:shadow-xl hover:border-emerald-200"
                        >
                          <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all transform group-hover:rotate-6">
                            <Scale className="w-8 h-8" />
                          </div>
                          <span className="text-xl font-bold text-slate-800 group-hover:text-emerald-700">{tag}</span>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </main>

      {/* Footer Decoration */}
      <footer className="mt-20 py-12 border-t border-slate-100 bg-white">
        <div className="container px-4 mx-auto max-w-5xl text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-slate-200"></div>
            <img src={flnLogo} alt="FLN Logo" className="w-10 h-10 opacity-50" />
            <div className="w-12 h-px bg-slate-200"></div>
          </div>
          <p className="text-slate-400 text-sm font-medium">سحنون زكرياء عبد المجيد | مترشح حزب جبهة التحرير الوطني</p>
        </div>
      </footer>

      {/* Mobile Interaction Hint */}
      <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-secondary/90 backdrop-blur-md rounded-full border border-white/20 text-white text-xs font-bold shadow-2xl flex items-center gap-2 pointer-events-none">
        <span>اختر قسماً من القائمة أعلاه</span>
        <ChevronLeft className="w-4 h-4 animate-pulse" />
      </div>
    </div>
  );
}
