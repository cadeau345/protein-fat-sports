import { Link } from "react-router-dom"

function Home() {
  return (
    <div dir="rtl" className="min-h-screen-bg-gradient-to-b from-blue-50 to-white">

      {/* شريط المصمم أعلى الصفحة */}

      <div className="bg-black text-white text-center py-2 text-sm">

        تصميم بواسطة عبدالله رمضان |

        <a
          href="https://wa.me/201034022992"
          className="underline mr-2 font-semibold"
        >
          تواصل واتساب
        </a>

      </div>


      {/* عنوان المشروع */}

      <div className="text-center px-6 py-12">

        <h1 className="text-3xl md:text-5xl font-bold text-blue-700 mb-4">

          العلاقة بين البروتين والدهون والنشاط البدني

        </h1>


        <p className="text-lg text-gray-700 mb-2">

          إشراف: د. إسراء البغدادي

        </p>


        <p className="text-lg text-gray-700 mb-6">

          إعداد الطلاب: محمد صابر محمد بدري - إبراهيم حمدي حسن أحمد

        </p>


        <p className="max-w-3xl mx-auto text-gray-600 leading-loose">

          يعد البروتين والدهون من أهم العناصر الغذائية التي يحتاجها جسم الإنسان
          أثناء ممارسة النشاط البدني، حيث يساعد البروتين في بناء العضلات وإصلاح
          الأنسجة بعد التمارين الرياضية، بينما توفر الدهون طاقة طويلة المدى تساعد
          الجسم على الاستمرار في أداء التمارين لفترات أطول بكفاءة عالية.

        </p>

      </div>



      {/* كروت التنقل بين الصفحات */}

      <div className="grid md:grid-cols-3 gap-8 px-6 pb-20">


        {/* كارت البروتين */}

        <Link to="/protein">

          <div className="bg-white shadow-lg rounded-2xl p-5 hover:scale-105 transition">

            <img
              src="https://images.unsplash.com/photo-1606755962773-d324e0a13086"
              className="rounded-xl mb-4 w-full"
            />

            <h2 className="text-xl font-bold text-blue-600 mb-2">

              أهمية البروتين للجسم

            </h2>

            <p className="text-gray-600">

              تعرف على دور البروتين في بناء العضلات وتحسين الأداء الرياضي.

            </p>

          </div>

        </Link>



        {/* كارت الدهون */}

        <Link to="/fat">

          <div className="bg-white shadow-lg rounded-2xl p-5 hover:scale-105 transition">

            <img
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
              className="rounded-xl mb-4 w-full"
            />

            <h2 className="text-xl font-bold text-blue-600 mb-2">

              دور الدهون في إنتاج الطاقة

            </h2>

            <p className="text-gray-600">

              تعرف على كيفية استخدام الجسم للدهون كمصدر للطاقة أثناء التمارين.

            </p>

          </div>

        </Link>



        {/* كارت النشاط البدني */}

        <Link to="/exercise">

          <div className="bg-white shadow-lg rounded-2xl p-5 hover:scale-105 transition">

            <img
              src="https://images.unsplash.com/photo-1550345332-09e3ac987658"
              className="rounded-xl mb-4 w-full"
            />

            <h2 className="text-xl font-bold text-blue-600 mb-2">

              أهمية النشاط البدني

            </h2>

            <p className="text-gray-600">

              اكتشف العلاقة بين التغذية السليمة وتحسين الأداء البدني.

            </p>

          </div>

        </Link>


      </div>



      {/* الفوتر */}

      <div className="bg-blue-700 text-white text-center py-4">

        مشروع العلاقة بين البروتين والدهون والنشاط البدني © 2026

      </div>

    </div>
  )
}

export default Home