<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreAssetRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true; // gate via middleware later if needed
    }

    public function rules(): array
    {
        $assetId = $this->route('asset')?->id;

        return [
            'title'            => ['required', 'string', 'max:255'],
            'artist'           => ['required', 'string', 'max:255'],
            'price'            => ['required', 'numeric', 'min:0', 'max:9999.99'],
            'redemption_limit' => ['required', 'integer', 'min:1', 'max:1000000'],
            'status'           => ['required', Rule::in(['live', 'scheduled', 'archived'])],
            'release_type'     => ['nullable', Rule::in(['single', 'album'])],
            'description'      => ['nullable', 'string', 'max:2000'],
            'cover'            => [
                $this->isMethod('post') ? 'nullable' : 'nullable',
                'image',
                'mimes:jpg,jpeg,png,webp',
                'max:5120', // 5 MB
            ],
            'cover_url'        => ['nullable', 'url', 'max:2048'],
        ];
    }

    public function messages(): array
    {
        return [
            'cover.max' => 'Cover image must be 5 MB or smaller.',
        ];
    }
}
