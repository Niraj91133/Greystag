import AdminHeroEditor from '@/components/Admin/AdminHeroEditor';
import PLPBannerEditor from '@/components/Admin/PLPBannerEditor';

export default function EditorPage() {
    return (
        <div style={{ padding: '40px', color: '#FFF', background: '#0F0F0F', minHeight: '100vh' }}>
            <h1 style={{ fontFamily: 'var(--font-serif)', color: '#C2A46D' }}>Store Editor</h1>
            <p style={{ opacity: 0.7 }}>Manage your luxury storefront content.</p>

            <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
                <AdminHeroEditor />
                <PLPBannerEditor />
            </div>
        </div>
    );
}
