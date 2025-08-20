import "./Dashboard.css";
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export default function Dashboard() {
    // LS bootstrap
    const [faqArr, setFaqArr] = useState(
        () => JSON.parse(localStorage.getItem("faqData")) || []
    );

    // form states
    const [title, setTitle] = useState("");
    const [paragraph, setParagraph] = useState("");

    // inline edit states
    const [editingTitleId, setEditingTitleId] = useState(null);
    const [editingDesId, setEditingDesId] = useState(null);
    const [editTitleValue, setEditTitleValue] = useState("");
    const [editDesValue, setEditDesValue] = useState("");

    // persist to LS
    useEffect(() => {
        localStorage.setItem("faqData", JSON.stringify(faqArr));
    }, [faqArr]);

    // next numeric id
    const nextId = useMemo(() => {
        const max = faqArr.reduce((m, f) => Math.max(m, Number(f.id || 0)), 0);
        return max + 1;
    }, [faqArr]);

    // add
    const onAdd = (e) => {
        e.preventDefault();
        if (!title.trim() || !paragraph.trim()) return;
        setFaqArr((prev) => [
            ...prev,
            { id: nextId, title: title.trim(), des: paragraph.trim() },
        ]);
        setTitle("");
        setParagraph("");
    };

    // delete
    const onDelete = (id) => {
        setFaqArr((prev) => prev.filter((f) => f.id !== id));
    };

    // start edit title
    const startEditTitle = (faq) => {
        setEditingTitleId(faq.id);
        setEditTitleValue(faq.title);
    };
    // submit edit title
    const submitEditTitle = (e, id) => {
        e.preventDefault();
        setFaqArr((prev) =>
            prev.map((f) => (f.id === id ? { ...f, title: editTitleValue } : f))
        );
        setEditingTitleId(null);
    };

    // start edit description
    const startEditDes = (faq) => {
        setEditingDesId(faq.id);
        setEditDesValue(faq.des);
    };
    // submit edit description
    const submitEditDes = (e, id) => {
        e.preventDefault();
        setFaqArr((prev) =>
            prev.map((f) => (f.id === id ? { ...f, des: editDesValue } : f))
        );
        setEditingDesId(null);
    };

    // animations
    const section = {
        hidden: { opacity: 0, y: 18 },
        show: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
    };
    const row = {
        hidden: { opacity: 0, y: 10, scale: 0.995 },
        show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.28, ease } },
        exit: { opacity: 0, y: -8, scale: 0.995, transition: { duration: 0.2, ease } },
    };

    return (
        <motion.div
            className="white-space ss-dashContainer hero-mt"
            variants={section}
            initial="hidden"
            animate="show"
        >
            {/* Form card */}
            <div className="ss-dashForm">
                <h2 className="LexendRegular">Add New FAQ</h2>
                <form onSubmit={onAdd}>
                    <div className="ss-dashFormDiv">
                        <label htmlFor="title" className="LexendRegular">
                            Title :
                        </label>
                        <input
                            type="text"
                            id="title"
                            placeholder="Enter Title"
                            className="LexendRegular"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="ss-dashFormDiv">
                        <label htmlFor="paragraph" className="LexendRegular">
                            Paragraph :
                        </label>
                        <input
                            type="text"
                            id="paragraph"
                            placeholder="Enter Paragraph"
                            className="LexendRegular"
                            value={paragraph}
                            onChange={(e) => setParagraph(e.target.value)}
                        />
                    </div>
                </form>
                <div className="ss-dashFormButton">
                    <motion.button
                        type="submit"
                        className="LexendRegular"
                        onClick={onAdd}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.15 }}
                    >
                        Add FAQ
                    </motion.button>
                </div>
            </div>

            {/* Table card */}
            <div className="ss-dashFAQ">
                <table>
                    <thead>
                        <tr>
                            <th className="LexendRegular">Title</th>
                            <th className="LexendRegular">Paragraph</th>
                            <th className="LexendRegular">Actions</th>
                        </tr>
                    </thead>

                    <AnimatePresence component="tbody" mode="popLayout">
                        <tbody>
                            {faqArr.map((faq) => (
                                <motion.tr
                                    key={faq.id}
                                    variants={row}
                                    initial="hidden"
                                    animate="show"
                                    exit="exit"
                                >
                                    {/* Title cell */}
                                    <td className="LexendRegular ss-title">
                                        {editingTitleId === faq.id ? (
                                            <form onSubmit={(e) => submitEditTitle(e, faq.id)} className="inline-form">
                                                <input
                                                    type="text"
                                                    value={editTitleValue}
                                                    onChange={(e) => setEditTitleValue(e.target.value)}
                                                    className="inline-input LexendRegular"
                                                    placeholder="New title"
                                                    autoFocus
                                                />
                                                <motion.input
                                                    type="submit"
                                                    value="Save"
                                                    className="inline-save LexendRegular"
                                                    whileHover={{ y: -1 }}
                                                    whileTap={{ scale: 0.98 }}
                                                />
                                                <button
                                                    type="button"
                                                    className="inline-cancel LexendRegular"
                                                    onClick={() => setEditingTitleId(null)}
                                                >
                                                    Cancel
                                                </button>
                                            </form>
                                        ) : (
                                            faq.title
                                        )}
                                    </td>

                                    {/* Description cell */}
                                    <td className="LexendRegular ss-des">
                                        {editingDesId === faq.id ? (
                                            <form onSubmit={(e) => submitEditDes(e, faq.id)} className="inline-form">
                                                <input
                                                    type="text"
                                                    value={editDesValue}
                                                    onChange={(e) => setEditDesValue(e.target.value)}
                                                    className="inline-input LexendRegular"
                                                    placeholder="New description"
                                                    autoFocus
                                                />
                                                <motion.input
                                                    type="submit"
                                                    value="Save"
                                                    className="inline-save LexendRegular"
                                                    whileHover={{ y: -1 }}
                                                    whileTap={{ scale: 0.98 }}
                                                />
                                                <button
                                                    type="button"
                                                    className="inline-cancel LexendRegular"
                                                    onClick={() => setEditingDesId(null)}
                                                >
                                                    Cancel
                                                </button>
                                            </form>
                                        ) : (
                                            faq.des
                                        )}
                                    </td>

                                    {/* Actions */}
                                    <td className="btns">
                                        <div>
                                            {editingTitleId === faq.id ? null : (
                                                <motion.button
                                                    className="LexendRegular btn"
                                                    onClick={() => startEditTitle(faq)}
                                                    whileHover={{ y: -1 }}
                                                    whileTap={{ scale: 0.98 }}
                                                >
                                                    Edit title
                                                </motion.button>
                                            )}
                                        </div>
                                        <div>
                                            {editingDesId === faq.id ? null : (
                                                <motion.button
                                                    className="LexendRegular btn"
                                                    onClick={() => startEditDes(faq)}
                                                    whileHover={{ y: -1 }}
                                                    whileTap={{ scale: 0.98 }}
                                                >
                                                    Edit des
                                                </motion.button>
                                            )}
                                        </div>

                                        <motion.button
                                            className="LexendRegular btn danger"
                                            onClick={() => onDelete(faq.id)}
                                            whileHover={{ y: -1 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            Delete
                                        </motion.button>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </AnimatePresence>
                </table>
            </div>
        </motion.div>
    );
}
