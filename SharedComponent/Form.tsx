"use client";

import React, { useCallback, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
const assetPath = '/tef-trial-canada-clear-tef-in-120-days';
import {
  getCountries,
  getCountryCallingCode,
} from "react-phone-number-input";
import en from "react-phone-number-input/locale/en.json";

/* ---------------- TYPES ---------------- */

export type LeadForm = {
  fullName: string;
  countryCode: string;
  phone: string;
  email: string;
  goal: string;
  frenchLevel: string;
  message: string;
  consent: boolean;
};

type FormProps = {
  title?: string;
  submitText?: string;
  redirectTo?: string;
};

/* ---------------- INITIAL STATE ---------------- */

const initial: LeadForm = {
  fullName: "",
  countryCode: "India (+91)",
  phone: "",
  email: "",
  goal: "",
  frenchLevel: "",
  message: "", // ✅ MUST EXIST
  consent: false,
};

const MIN_MESSAGE_LENGTH = 30;

/* ---------------- COMPONENT ---------------- */

const Form: React.FC<FormProps> = ({
  title = "Get Personalized Guidance",
  submitText = "Get Started →",
  redirectTo = "/thank-you",
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [form, setForm] = useState<LeadForm>(initial);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const charCount = form.message.trim().length;

  /* -------- Country Dropdown -------- */

  const countryCodeOptions = useMemo(() => {
    return getCountries()
      .map((countryCode) => {
        const callingCode = getCountryCallingCode(countryCode);
        const countryName = en[countryCode];
        return `${countryName} (+${callingCode})`;
      })
      .sort();
  }, []);

  /* -------- Field Update -------- */

  const setField = useCallback(
    (key: keyof LeadForm, value: string | boolean) => {
      setForm((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  /* -------- UTM Capture -------- */

  const utm = useMemo(() => {
    return {
      utm_source: searchParams.get("utm_source") || "",
      utm_medium: searchParams.get("utm_medium") || "",
      utm_campaign: searchParams.get("utm_campaign") || "",
    };
  }, [searchParams]);

  /* -------- Validation -------- */

  const validate = () => {
    if (!form.fullName.trim()) return "Full name is required";
    if (!/^\S+@\S+\.\S+$/.test(form.email))
      return "Enter a valid email";
    if (!/^\d{7,15}$/.test(form.phone))
      return "Enter valid phone number";
    if (charCount < MIN_MESSAGE_LENGTH)
      return `Message must be at least ${MIN_MESSAGE_LENGTH} characters`;
    if (!form.consent) return "Please accept consent";
    return null;
  };

  const isFormValid =
  form.fullName.trim() !== "" &&
  /^\S+@\S+\.\S+$/.test(form.email) &&
  /^\d{7,15}$/.test(form.phone) &&
  form.goal !== "" &&
  form.frenchLevel !== "" &&
  (form.message ?? "").trim().length >= MIN_MESSAGE_LENGTH &&
  form.consent;
  /* -------- Submit Handler -------- */
const handleSubmit = async () => {
  setErrorMessage("");

  const validationError = validate();
  if (validationError) {
    setErrorMessage(validationError);
    return;
  }

  setLoading(true);

  try {
    const countryOnly = form.countryCode.split(" (")[0];
    const callingCode = form.countryCode.match(/\+\d+/)?.[0] || "";
    const fullPhone = `${callingCode}${form.phone}`;

    const hutk =
      document.cookie
        .split("; ")
        .find((row) => row.startsWith("hubspotutk="))
        ?.split("=")[1] || "";

    const payload = {
      fields: [
        { name: "firstname", value: form.fullName },
        { name: "email", value: form.email },
        { name: "phone", value: fullPhone },
        { name: "country", value: countryOnly },
        { name: "goal", value: form.goal },
        { name: "french_level", value: form.frenchLevel },
        { name: "message", value: form.message },
      ],

      context: {
        hutk: hutk || undefined,
        pageUri: window.location.href,
        pageName: document.title,
      },

      legalConsentOptions: {
        consent: {
          consentToProcess: true,
          text: "I agree to allow this website to store and process my personal data.",
        },
      },
    };

    const response = await fetch(`${assetPath}/api/hubspot-submit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) throw new Error("Submission failed");

    router.push(redirectTo);
  } catch (error) {
    setErrorMessage("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
};
  /* ---------------- UI ---------------- */

  return (
    <section className="w-full bg-[#FBF4D1] py-16 px-4 sm:px-8 lg:px-20">
      <div className="w-full max-w-[900px] mx-auto">

        <h2 className="text-center text-3xl md:text-4xl font-display font-bold text-[#007AD2] mb-10">
          {title}
        </h2>

        <div className="grid gap-5">

          <input
            placeholder="Full Name"
            value={form.fullName}
            onChange={(e) => setField("fullName", e.target.value)}
            className="w-full px-5 py-4 rounded-xl bg-white border border-[#E5E5E5]"
          />

          <input
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={(e) => setField("email", e.target.value)}
            className="w-full px-5 py-4 rounded-xl bg-white border border-[#E5E5E5]"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <select
              value={form.countryCode}
              onChange={(e) => setField("countryCode", e.target.value)}
              className="w-full px-5 py-4 rounded-xl bg-white border border-[#E5E5E5]"
            >
              {countryCodeOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>

            <input
              type="tel"
              placeholder="Phone"
              value={form.phone}
              onChange={(e) => setField("phone", e.target.value)}
              className="w-full px-5 py-4 rounded-xl bg-white border border-[#E5E5E5]"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <select
              value={form.goal}
              onChange={(e) => setField("goal", e.target.value)}
              className="w-full px-5 py-4 rounded-xl bg-white border border-[#E5E5E5]"
            >
              <option value="">Select Goal</option>
              <option value="Canada PR">Canada PR</option>
              <option value="Study Abroad">Study Abroad</option>
              <option value="Career Growth">Career Growth</option>
            </select>

            <select
              value={form.frenchLevel}
              onChange={(e) => setField("frenchLevel", e.target.value)}
              className="w-full px-5 py-4 rounded-xl bg-white border border-[#E5E5E5]"
            >
              <option value="">Select Level</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

          {/* MESSAGE FIELD */}
          <div>
            <textarea
              placeholder="Tell us about your TEF goal (min 30 characters)"
              value={form.message}
              onChange={(e) => setField("message", e.target.value)}
              rows={5}
              className="w-full px-5 py-4 rounded-xl bg-white border border-[#E5E5E5] resize-none"
            />

            <p className="text-xs mt-2 text-[#464646]">
              {charCount} characters •{" "}
              {charCount < MIN_MESSAGE_LENGTH
                ? `Add ${MIN_MESSAGE_LENGTH - charCount} more`
                : "Looks good"}
            </p>
          </div>

          <label className="flex items-center gap-3 text-sm text-[#464646]">
            <input
              type="checkbox"
              checked={form.consent}
              onChange={(e) => setField("consent", e.target.checked)}
            />
            I agree to be contacted.
          </label>

          {errorMessage && (
            <p className="text-red-500 text-sm">{errorMessage}</p>
          )}

        <button
  onClick={handleSubmit}
  disabled={!isFormValid || loading}
  className={`
    w-full py-4 rounded-full font-display text-lg font-semibold transition
    ${
      isFormValid
        ? "bg-[#E9C81A] text-[#211C03] hover:scale-105"
        : "bg-[#E9C81A]/40 text-[#211C03]/60 cursor-not-allowed"
    }
  `}
>
  {loading ? "Submitting..." : submitText}
</button>

        </div>
      </div>
    </section>
  );
};

export default Form;