import React from "react"
import { Editor } from "@tinymce/tinymce-react"
import { Controller } from "react-hook-form"

export default function RTE({ name = "content", control, defaultValue = "", label }) {
  return (
    <div className="w-full">
      {label && <label className="inline-block mb-1 pl-1">{label}</label>}

      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field: { onChange, value } }) => (
          <Editor
            apiKey="2tglskep3kldn1ygc83javggfetqfbvmkjrtor89fzgg64p8"
            value={value}
            init={{
              height: 500,
              menubar: true,

              plugins: [
                "advlist autolink lists link image charmap preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table help wordcount",
              ],

              toolbar:
                "undo redo | blocks | bold italic underline | alignleft aligncenter alignright | bullist numlist outdent indent | removeformat | help",
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  )
}
