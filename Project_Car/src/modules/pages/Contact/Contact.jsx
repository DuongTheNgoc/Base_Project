import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function Contact() {
  return (
    <div>
      <Header />

      <section className="contact">
        <div className="container">
          <div className="title">
            <h2>CONTACT</h2>
            <p>
              Đia chỉ: 475A Đ. Điện Biên Phủ, Phường 25, Bình Thạnh, Thành phố Hồ Chí Minh
              <br /> Điện thoại: 02838386852
              <br />
              Fax: 02838386853
              <br /> Email: hotro@haiha.vn Hotline: 19006868
            </p>
          </div>
          <div className="contact_content">
            <div className="contact_maps">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1264928439327!2d106.71188097460352!3d10.801622758729348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528a459cb43ab%3A0x6c3d29d370b52a7e!2zSFVURUNIIC0gxJDhuqFpIGjhu41jIEPDtG5nIG5naOG7hyBUUC5IQ00gKFNhaSBHb24gQ2FtcHVzKQ!5e0!3m2!1svi!2s!4v1700313469064!5m2!1svi!2s"
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="contact_form">
              <form>
                <input type="text" placeholder="Username" />
                <input type="email" placeholder="Email" />
                <textarea
                  cols={30}
                  rows={10}
                  placeholder="Ask a questions....."
                  defaultValue={""}
                />
                <input type="button" defaultValue="Submit" />
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
