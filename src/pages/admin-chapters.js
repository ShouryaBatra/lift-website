import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  addDoc,
} from "firebase/firestore";
import { auth, db } from "../config/firebase";
import MainLayout from "../components/layout/MainLayout";
import Container from "../components/ui/Container";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

const ADMIN_EMAIL = "lift.empowerlives@gmail.com";

const EmailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 inline-block ml-1 text-lift-blue hover:text-lift-blue/80 transition-colors"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

export default function AdminChapters() {
  const [chapters, setChapters] = useState([]);
  const [selected, setSelected] = useState(null); // chapter object or null
  const [editData, setEditData] = useState(null); // for editing
  const [adding, setAdding] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  // Auth protection
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user || user.email !== ADMIN_EMAIL) {
        router.replace("/login");
      }
    });
    return () => unsubscribe();
  }, [router]);

  // Fetch chapters
  const fetchChapters = async () => {
    setLoading(true);
    try {
      const chaptersCollection = collection(db, "chapters");
      const chaptersSnapshot = await getDocs(chaptersCollection);
      const chaptersList = chaptersSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setChapters(chaptersList);
    } catch (err) {
      setError("Failed to load chapters.");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchChapters();
  }, []);

  // Select a chapter
  const handleSelect = (chapter) => {
    setSelected(chapter);
    setEditData(chapter);
    setAdding(false);
    setMessage("");
  };

  // Start adding
  const handleAdd = () => {
    setSelected(null);
    setEditData({
      chapterLead: { name: "", email: "" },
      chapterSince: "",
      location: {
        state: "",
        city: "",
        coordinates: { latitude: "", longitude: "" },
      },
      active: true,
    });
    setAdding(true);
    setMessage("");
  };

  // Handle edit form change
  const handleEditChange = (field, value) => {
    setEditData((prev) => {
      if (field.startsWith("chapterLead.")) {
        return {
          ...prev,
          chapterLead: { ...prev.chapterLead, [field.split(".")[1]]: value },
        };
      }
      if (field.startsWith("location.coordinates.")) {
        return {
          ...prev,
          location: {
            ...prev.location,
            coordinates: {
              ...prev.location.coordinates,
              [field.split(".")[2]]: value,
            },
          },
        };
      }
      if (field.startsWith("location.")) {
        return {
          ...prev,
          location: {
            ...prev.location,
            [field.split(".")[1]]: value,
            coordinates: { ...prev.location.coordinates },
          },
        };
      }
      return { ...prev, [field]: value };
    });
  };

  // Save edits
  const handleSave = async () => {
    setMessage("");
    try {
      const docRef = doc(db, "chapters", selected.id);
      await updateDoc(docRef, editData);
      setMessage("Chapter updated!");
      fetchChapters();
    } catch (err) {
      setMessage("Error updating chapter.");
    }
  };

  // Delete chapter
  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this chapter?"))
      return;
    try {
      const docRef = doc(db, "chapters", selected.id);
      await deleteDoc(docRef);
      setMessage("Chapter deleted.");
      setSelected(null);
      fetchChapters();
    } catch (err) {
      setMessage("Error deleting chapter.");
    }
  };

  // Add new chapter
  const handleAddSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      await addDoc(collection(db, "chapters"), editData);
      setMessage("Chapter added!");
      setAdding(false);
      fetchChapters();
    } catch (err) {
      setMessage("Error adding chapter.");
    }
  };

  return (
    <MainLayout>
      <section className="py-12 bg-lift-accent min-h-screen">
        <Container>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Scrollable cards */}
            <div className="md:w-1/3 w-full overflow-x-auto flex md:flex-col flex-row gap-4 pb-4 md:pb-0">
              {loading ? (
                <div className="text-center w-full">Loading...</div>
              ) : (
                chapters.map((chapter) => (
                  <Card
                    key={chapter.id}
                    className={`p-4 cursor-pointer min-w-[220px] ${
                      selected && selected.id === chapter.id
                        ? "border-lift-blue border-2"
                        : ""
                    }`}
                    onClick={() => handleSelect(chapter)}
                  >
                    <div className="font-bold text-lg mb-1">
                      {chapter.location?.state}
                    </div>
                    <div className="text-sm text-lift-text-secondary">
                      {chapter.chapterLead?.name}
                    </div>
                  </Card>
                ))
              )}
              <Button
                variant="primary"
                className="min-w-[220px] h-[60px] flex-shrink-0"
                onClick={handleAdd}
              >
                + Add Chapter
              </Button>
            </div>
            {/* Details panel */}
            <div className="flex-1 bg-white rounded-lg shadow-md p-6 min-h-[300px]">
              {selected && editData && !adding && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Edit Chapter</h2>
                  <div className="mb-2">
                    <span className="font-semibold">State:</span>{" "}
                    <input
                      className="border rounded px-2 py-1"
                      value={editData.location?.state || ""}
                      onChange={(e) =>
                        handleEditChange("location.state", e.target.value)
                      }
                    />
                  </div>
                  <div className="mb-2">
                    <span className="font-semibold">Latitude:</span>{" "}
                    <input
                      className="border rounded px-2 py-1"
                      value={editData.location?.coordinates?.latitude || ""}
                      onChange={(e) =>
                        handleEditChange(
                          "location.coordinates.latitude",
                          e.target.value
                        )
                      }
                    />
                  </div>
                  <div className="mb-2">
                    <span className="font-semibold">Longitude:</span>{" "}
                    <input
                      className="border rounded px-2 py-1"
                      value={editData.location?.coordinates?.longitude || ""}
                      onChange={(e) =>
                        handleEditChange(
                          "location.coordinates.longitude",
                          e.target.value
                        )
                      }
                    />
                  </div>
                  <div className="mb-2">
                    <span className="font-semibold">Chapter Lead Name:</span>{" "}
                    <input
                      className="border rounded px-2 py-1"
                      value={editData.chapterLead?.name || ""}
                      onChange={(e) =>
                        handleEditChange("chapterLead.name", e.target.value)
                      }
                    />
                  </div>
                  <div className="mb-2">
                    <span className="font-semibold">Chapter Lead Email:</span>{" "}
                    <input
                      className="border rounded px-2 py-1"
                      value={editData.chapterLead?.email || ""}
                      onChange={(e) =>
                        handleEditChange("chapterLead.email", e.target.value)
                      }
                    />
                  </div>
                  <div className="mb-2">
                    <span className="font-semibold">Chapter Since:</span>{" "}
                    <input
                      className="border rounded px-2 py-1"
                      value={editData.chapterSince || ""}
                      onChange={(e) =>
                        handleEditChange("chapterSince", e.target.value)
                      }
                    />
                  </div>
                  <div className="mb-4">
                    <span className="font-semibold">Active:</span>{" "}
                    <input
                      type="checkbox"
                      checked={!!editData.active}
                      onChange={(e) =>
                        handleEditChange("active", e.target.checked)
                      }
                    />
                  </div>
                  <Button
                    variant="primary"
                    className="mr-2"
                    onClick={handleSave}
                  >
                    Save
                  </Button>
                  <Button
                    variant="outline"
                    className="text-red-600 border-red-600 hover:bg-red-50"
                    onClick={handleDelete}
                  >
                    Delete
                  </Button>
                  {message && (
                    <div className="mt-4 text-center text-lift-blue">
                      {message}
                    </div>
                  )}
                </div>
              )}
              {adding && editData && (
                <form onSubmit={handleAddSubmit}>
                  <h2 className="text-2xl font-bold mb-4">Add Chapter</h2>
                  <div className="mb-2">
                    <span className="font-semibold">State:</span>{" "}
                    <input
                      className="border rounded px-2 py-1"
                      value={editData.location?.state || ""}
                      onChange={(e) =>
                        handleEditChange("location.state", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div className="mb-2">
                    <span className="font-semibold">Latitude:</span>{" "}
                    <input
                      className="border rounded px-2 py-1"
                      value={editData.location?.coordinates?.latitude || ""}
                      onChange={(e) =>
                        handleEditChange(
                          "location.coordinates.latitude",
                          e.target.value
                        )
                      }
                      required
                    />
                  </div>
                  <div className="mb-2">
                    <span className="font-semibold">Longitude:</span>{" "}
                    <input
                      className="border rounded px-2 py-1"
                      value={editData.location?.coordinates?.longitude || ""}
                      onChange={(e) =>
                        handleEditChange(
                          "location.coordinates.longitude",
                          e.target.value
                        )
                      }
                      required
                    />
                  </div>
                  <div className="mb-2">
                    <span className="font-semibold">Chapter Lead Name:</span>{" "}
                    <input
                      className="border rounded px-2 py-1"
                      value={editData.chapterLead?.name || ""}
                      onChange={(e) =>
                        handleEditChange("chapterLead.name", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div className="mb-2">
                    <span className="font-semibold">Chapter Lead Email:</span>{" "}
                    <input
                      className="border rounded px-2 py-1"
                      value={editData.chapterLead?.email || ""}
                      onChange={(e) =>
                        handleEditChange("chapterLead.email", e.target.value)
                      }
                    />
                  </div>
                  <div className="mb-2">
                    <span className="font-semibold">Chapter Since:</span>{" "}
                    <input
                      className="border rounded px-2 py-1"
                      value={editData.chapterSince || ""}
                      onChange={(e) =>
                        handleEditChange("chapterSince", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <span className="font-semibold">Active:</span>{" "}
                    <input
                      type="checkbox"
                      checked={!!editData.active}
                      onChange={(e) =>
                        handleEditChange("active", e.target.checked)
                      }
                    />
                  </div>
                  <Button variant="primary" type="submit" className="mr-2">
                    Add
                  </Button>
                  {message && (
                    <div className="mt-4 text-center text-lift-blue">
                      {message}
                    </div>
                  )}
                </form>
              )}
              {!selected && !adding && (
                <div className="text-center text-lift-text-secondary mt-12">
                  Select a chapter or add a new one.
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>
    </MainLayout>
  );
}
