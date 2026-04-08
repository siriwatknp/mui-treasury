import { describe, it, expect } from "vitest";
import { parseFirebaseConfig } from "./firebase-config-form";

describe("parseFirebaseConfig", () => {
  const expectedConfig = {
    apiKey: "test-api-key-123",
    authDomain: "test-project.firebaseapp.com",
    databaseURL: "https://test-project.firebaseio.com",
    projectId: "test-project",
    storageBucket: "test-project.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abc123def456",
  };

  it("parses plain JS object with unquoted keys", () => {
    const input = `{
  apiKey: "test-api-key-123",
  authDomain: "test-project.firebaseapp.com",
  databaseURL: "https://test-project.firebaseio.com",
  projectId: "test-project",
  storageBucket: "test-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123def456"
}`;
    expect(parseFirebaseConfig(input)).toEqual(expectedConfig);
  });

  it("parses full Firebase SDK snippet", () => {
    const input = `// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "test-api-key-123",
  authDomain: "test-project.firebaseapp.com",
  databaseURL: "https://test-project.firebaseio.com",
  projectId: "test-project",
  storageBucket: "test-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123def456"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);`;
    expect(parseFirebaseConfig(input)).toEqual(expectedConfig);
  });

  it("parses strict JSON format", () => {
    const input = JSON.stringify(expectedConfig);
    expect(parseFirebaseConfig(input)).toEqual(expectedConfig);
  });

  it("returns null for invalid input", () => {
    expect(parseFirebaseConfig("not valid")).toBeNull();
    expect(parseFirebaseConfig("{ broken }")).toBeNull();
  });
});
