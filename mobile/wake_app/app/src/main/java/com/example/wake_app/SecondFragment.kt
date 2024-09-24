package com.example.wake_app

import android.content.Context
import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ArrayAdapter
import android.widget.TextView
import androidx.navigation.fragment.findNavController
import com.example.wake_app.databinding.FragmentSecondBinding


class SecondFragment : Fragment() {

    private var _binding: FragmentSecondBinding? = null

    // This property is only valid between onCreateView and
    // onDestroyView.
    private val binding get() = _binding!!

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {

        _binding = FragmentSecondBinding.inflate(inflater, container, false)
        return binding.root

    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        var adapter: CustomAdapter
        var itemList: List<String> = listOf("5:00 AM - Morning Alarm - Strong", "7:00 PM - Go Train") // Ejemplo de datos

        adapter = CustomAdapter(requireContext(), itemList)
        binding.listView.adapter = adapter

        binding.buttonNewAlarm.setOnClickListener {
            findNavController().navigate(R.id.action_SecondFragment_to_fragment_creat_edit_alarm)
        }

    }

    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }
}

class CustomAdapter(
    context: Context,
    private val items: List<String>
) : ArrayAdapter<String>(context, R.layout.item_lista_alarmas, items) {

    override fun getView(position: Int, convertView: View?, parent: ViewGroup): View {
        val view = convertView ?: LayoutInflater.from(context)
            .inflate(R.layout.item_lista_alarmas, parent, false)
        val textView: TextView = view.findViewById(R.id.item_text)
        textView.text = items[position]
        return view
    }
}